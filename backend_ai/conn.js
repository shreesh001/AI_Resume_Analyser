const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shreeshpathak1_db_user:pjSTsJlIheybxpr3@cluster0.g6qawjp.mongodb.net/AI_resume?appName=Cluster0', {
    serverSelectionTimeoutMS: 5000, // fail fast instead of 30s
})
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((err) => {
        console.log("Error while connecting to database:", err.message); // ← will now show the real reason
    });

// pjSTsJlIheybxpr3
// shreeshpathak1_db_user
// mongodb+srv://shreeshpathak1_db_user:pjSTsJlIheybxpr3@cluster0.g6qawjp.mongodb.net/?appName=Cluster0