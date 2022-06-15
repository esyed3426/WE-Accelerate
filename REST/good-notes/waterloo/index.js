import express, { application } from 'express'; // Importing a module
const app = express(); // Creating an express app
const { PORT = 3000 } = process.env; // Try to get the port from the environment variable, else use 3000
import bodyParser from 'body-parser';
import cors from 'cors';
import data from './data.js';
import * as utilities from './utils/functions.js'
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: 'json'};
import { util } from 'chai';

app.use(bodyParser.json()).use(cors());

app.get("/", (request, response) => 
    response.send("Hello World, Waterloo!"
));

app.get("/api/v1/doctors", (req, res) => {
    res.json(data.doctors);
});

app.get("/api/v1/patients", (req, res) => {
    res.json(data.patients);
});

app.get("/api/v1/doctors/:id", (req, res) => {
    if (utilities.isInValidId(req.params.id)) {
        return res.status(400).json({error: "Invalid id."});
    }
    const id = parseInt(req.params.id);
    const doctor = data.doctors.find((doc) => doc.id === id);
    if (!doctor) {
        res.status(404).json({error: "Doctor not found."});
    }
    res.json(doctor);
});

app.get("/api/v1/patients/:id", (req, res) => {
    if (utilities.isInValidId(req.params.id)) {
        return res.status(400).json({error: "Invalid id."});
    }
    const id = parseInt(req.params.id);
    const patient = data.patients.find((patient) => patient.id === id);
    if (!patient) {
        res.status(404).json({error: "Patient not found."});
    }
    res.json(patient);

});



app.get("/healthcheck", (req, res) => {
    let healthcheck = {
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now()
    };

    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send(healthcheck);
    }
});

// POST

app.post("/api/v1/doctors", (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({error: "Doctor needs a name parameter."});
    }
    const nextId = data.doctors.length + 1;
    const doctor = { id: nextId, name: req.body.name };
    data.doctors.push(doctor);
    res.status(201).json(doctor);
});


app.post("/api/v1/patients", (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({error: "Patient needs a name parameter."});
    }
    const nextId = data.patients.length + 1;
    const patient = { id: nextId, name: req.body.name };
    data.patients.push(patient);
    res.status(201).json(patient);
});


/* app.get("/api/v1/visits", (req, res) => {
    const { doctorid, patientid } = req.query;
    let visits = data.visits;
    if (doctorid) {
        visits = visits.filter(
            (visit) => visit.doctorid === parseInt(doctorid, 10)
        );
    }
    if (patientid) {
        visits = visits.filter(
            (visit) => visit.patientid === parseInt(patientid, 10)
        );
    }
    return res.json(visits);
}); */

app.get("/api/v1/visits", (req, res) => {
    const { doctorid, patientid } = req.query;
    let visits = data.visits;

    if (doctorid) {
        visits = visits.filter(
            (visit) => visit.doctorid === parseInt(doctorid, 10)
        );
    }

    if (patientid) {
        visits = visits.filter(
            (visit) => visit.patientid === parseInt(patientid, 10)
        );
    }
    return res.json(visits);
});

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => 
    console.log(`Hello World, I'm listening on http:localhost:${PORT}/api/v1/docs`)
);