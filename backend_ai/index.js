const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

require('./conn');

const userRoute = require('./Routes/user');

app.use(express.json());
app.use('/api/user', userRoute);

app.listen(PORT, () => {
    console.log("backend server is running on port ", PORT);
})