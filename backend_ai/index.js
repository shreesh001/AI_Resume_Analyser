const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

require('./conn');

app.get('/', (req, res) => {
    res.send({
        message: "hi welcome to my project ai resume analyser"
    })
})

app.listen(PORT, () => {
    console.log("backend server is running on port ", PORT);
})