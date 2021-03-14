const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}, (err, db) => {
    if (err) throw err;
    var dbo = db.db("cardDB")
    dbo.createCollection("pins", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
})
