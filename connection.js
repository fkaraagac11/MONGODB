const mongoose = require("mongoose");

// Connect to mongodb

mongoose.connect("mongodb://localhost:27017");
mongoose.connection
    .once("open", () => {
        console.log("connection has been made now make fireworks!!!!!");
    })
    .on("error", (error) => {
        console.log("connection error", error);
    });
