const mongoose = require("mongoose");

// ES6 Promissess

mongoose.Promise = global.Promise;

// Connect to db before tests run

before(function (done) {
    mongoose.connect("mongodb://localhost:27017");
    mongoose.connection
        .once("open", function () {
            console.log("Connection has been made");
            done();
        })
        .on("error", (error) => {
            console.log("Connection error:", error);
        });
});
