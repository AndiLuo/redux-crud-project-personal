const express = require("express");
const mongo = require("mongodb");
const assert = require("assert");

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "pinDB";
// assign connection to client var
const client = new MongoClient(url);

const app = express();

//finds entries in pins database inside mongo
const findPins = function (db, callback) {
  // Get the documents collection
  const collection = db.collection("pins");
  // Find some documents
  collection.find({}).toArray(function (err, pins) {
    assert.equal(err, null);
    callback(pins);
  });
};

//creates connection and assigns entries to route
app.get("/api/pins", function (req, res, next) {
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected to server");
    //now "db" database is ready 2 use
    const db = client.db(dbName);
    //pass in callback
    findPins(db, (pins) => {
        res.send(pins)
    });
  });
});


app.listen(8080, () => {
    console.log("listening on port 8080")
  })
// const app = express();
// const findPins = function(db, callback) {

// }

// app.get('/api/pins', function(req, res) {
//     mongo.connect(url, function(err, pinDB) {
//         assert.equal(null, err)
//     })
// })

// app.use (
//     '/api/pins',
//     graphqlHTTP({
//         schema,
//         graphql: true
//     })
// )

// module.exports = function (database) {
//     const app = express();

// app.get("/api/pins", (req, res) => {
//     mock_database.getAllPins(null, (err, pins) => {
//         res.send({ results: pins });
//     });
// });

// app.get("/api/pins:id", (req, res) => {
//     mock_database.getPin(null, (err, pins) => {
//         pins.forEach((pin) => {
//             console.log(pin);
//             console.log(req.params.id);
//             if (req.params.id === ":" + pin.id) {
//                 res.send({ results: pin });
//             }
//         });
//     });
// });

// return app;
// }
