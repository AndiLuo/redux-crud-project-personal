const express = require("express");
const mongo = require("mongodb");
const assert = require("assert");

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "pinDB";
const pinController = require("./controllers/PinController");

// assign connection to client var
const client = new MongoClient(url);
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

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
      res.send(pins);
    });
  });
});

//allows createPin front-end component to create data entries and add them to mongo database
app.post("/api/pins", function (req, res, next) {
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected to server");
    //now "db" database is ready 2 use
    const db = client.db(dbName);
    //req.body === the object
    console.log(req.body)
    //inserts
    db.collection('pins').insertOne(req.body)
    });
  })




app.listen(PORT, () => {
  console.log("listening on port 8080");
});

// }
