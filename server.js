const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// ======================= BASIC OPERATIONS =========================

// Addition
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).send("Missing parameters");
    res.json({ result: parseFloat(a) + parseFloat(b) });
});

// Subtraction
app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).send("Missing parameters");
    res.json({ result: parseFloat(a) - parseFloat(b) });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).send("Missing parameters");
    res.json({ result: parseFloat(a) * parseFloat(b) });
});

// Division
app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).send("Missing parameters");
    if (b == 0) return res.status(400).send("Cannot divide by zero");
    res.json({ result: parseFloat(a) / parseFloat(b) });
});

// ======================= ADVANCED OPERATIONS =========================

// Exponentiation (a^b)
app.get('/power', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).send("Missing parameters");
    res.json({ result: Math.pow(parseFloat(a), parseFloat(b)) });
});

// Square Root (√a)
app.get('/sqrt', (req, res) => {
    const { a } = req.query;
    if (!a) return res.status(400).send("Missing parameter");
    if (a < 0) return res.status(400).send("Cannot calculate square root of a negative number");
    res.json({ result: Math.sqrt(parseFloat(a)) });
});

// Modulo (a % b)
app.get('/mod', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).send("Missing parameters");
    res.json({ result: parseFloat(a) % parseFloat(b) });
});

// ======================= ERROR HANDLING MIDDLEWARE =========================

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: "Something went wrong!" });
});

// ======================= STARTING THE SERVER =========================

app.listen(port, () => {
    console.log(`Calculator microservice running on http://localhost:${port}`);
});
