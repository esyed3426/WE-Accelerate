const express = require("express");
const fetch = require("node-fetch");
const chalk = require("chalk");

const bodyParser = require("body-parser");
const cors = require("cors");
const data = require("./data");

const error = chalk.bold.bgRedBright;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()).use(cors());

app.get("/", (request, response) =>
  response.send("Hello! Welcome to Debugging JavaScript course")
);

app.get("/api/v1/doctors", (request, response) => {
  const { doctors } = data;
  return response.json(doctors);
});

app.get("/api/v1/doctors/:id", (request, response) => {
  console.time("get doctor by id");
  const doctor = data.doctors.find((doctor) => doctor.id === request.params.id);
  console.timeEnd("get doctor by id");
  console.assert(doctor, `Doctor ${request.params.id} not found`);
  if (!doctor) {
    return response.status(404).json({ error: "Doctor not found." });
  }

  return response.json(doctor);
});

app.post("/api/v1/doctors", (request, response) => {
  const nextId = data.doctors.length + 1;
  const doctor = { id: nextId.toString(), name: request.body.name };
  data.doctors.push(doctor);

  console.log(data.doctors);
  console.table(data.doctors);

  return response.status(201).send("Successfully added a doctor");
});

app.get("/api/v1/patients", (req, res) => res.json(data.patients));

app.get("/api/v1/patients/:id", (request, response) => {
  const id = parseInt(request.params.id, 10);
  const patient = data.patients.find((patient) => patient.id === id);
  if (!patient) {
    return response.status(404).json(patient);
  }
  return response.json(patient);
});

app.post("/api/v1/patients", (request, response) => {
  const nextId = data.patients.length + 1;
  const patient = { id: nextId, name: request.body.name };
  data.patients.push(patient);
  return response.status(201).json(patient);
});

app.get("/api/v1/visits", (request, response) => {
  const { doctorid, patientid } = request.query;
  let filteredVisits = data.visits;
  if (doctorid) {
    filteredVisits = filteredVisits.filter(
      (visit) => visit.doctorid === parseInt(doctorid, 10)
    );
  }
  if (patientid) {
    filteredVisits = filteredVisits.filter(
      (visit) => visit.patientid === parseInt(patientid, 10)
    );
  }

  return response.json(filteredVisits);
});

app.post("/api/v1/visits", async (request, response) => {
  const { doctorid, patientid } = request.body;
  if (doctorid && patientid) {
    const fetchResponse = await fetch(
      `https://doctor-info-with-delay.apps.cac.preview.pcf.manulife.com/v1/doctors/${doctorid}/details`
    );
    const details = await fetchResponse.json();

    if (
      !details ||
      !details.address ||
      details.address.province !== "Ontario"
    ) {
      return response
        .status(400)
        .send("Reservation can only be made with doctors within Ontario");
    }

    let filteredVisits = data.visits.filter(
      (visit) =>
        visit.doctorid === doctorid &&
        visit.patientid === patientid &&
        visit.completed === 0
    );

    if (filteredVisits && filteredVisits.length > 0) {
      return response
        .status(409)
        .send("Reservation already made with specified doctor and patient");
    }
    const visit = {
      id: data.visits.length + 1,
      patient_id: patientid,
      doctor_id: doctorid,
      completed: "0",
    };
    data.visits.push(visit);
    return response.status(201).json(visit);
  }

  return response.json(filteredVisits);
});

app.listen(port, () =>
  console.log(
    chalk.magenta("App listening on port"),
    chalk.bgBlue.underline.bold(`${port}`)
  )
);

module.exports = app;
