const moongoose = require('mongoose');

moongoose.connect('mongodb+srv://shreeshpathak1_db_user:pjSTsJlIheybxpr3@cluster0.g6qawjp.mongodb.net/?appName=Cluster0')
    .then((res) => {
        console.log("connected to database successfully")
    }).catch((err) => {
        console.log("error while connecting to database ", err);
    })
