const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

require('./conn');
app.use(express.json());

const userRoute = require('./Routes/user');
const resumeRoute = require('./Routes/resume');

app.use('/api/user', userRoute);
app.use('/api/resume', resumeRoute);

app.listen(PORT, () => {
    console.log("backend server is running on port ", PORT);
})