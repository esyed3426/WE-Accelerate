import express from "express";
const app = express();
const { PORT = 3000 } = process.env;
import bodyParser from "body-parser";
import cors from "cors";
app.use(bodyParser.json()).use(cors());
app.get("/", (request, response) => response.send("hello world"));
app.get("/healthcheck", (req, res) => {
    let healthcheck = {
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now(),
    };
    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send(healthcheck);
    }
});
app.listen(PORT, () =>
    console.log(`Hello World, I'm listening on http://localhost:${PORT}/`)
);
export default app;