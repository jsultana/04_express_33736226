// routes/main.js
const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (_req, res) => res.send("Hello World!"));
router.get("/about", (_req, res) => res.send("<h1>This is the about page</h1>"));
router.get("/contact", (_req, res) => res.send("<p>Contact me at: 12345678@gold.ac.uk</p>"));
router.get("/date", (_req, res) => res.send(`<p>Current date/time: ${new Date().toString()}</p>`));

router.get("/welcome/:name", (req, res) => {
    const safe = String(req.params.name).replace(/[<>]/g, "");
    res.send(`<h1>Welcome, ${safe}!</h1>`);
});

function stamp(req, _res, next) { req.requestTime = new Date().toISOString(); next(); }
function respond(req, res) { res.send(`<p>Chained handler OK. Request time: ${req.requestTime}</p>`); }
router.get("/chain", stamp, respond);

router.get("/file", (_req, res) => {
    const filePath = path.join(__dirname, "..", "a.html");
    res.sendFile(filePath);
});

module.exports = router;
