const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://mrnippy:inkchongwhat@mern.ykmoc.mongodb.net/cardDB?retryWrites=true&w=majority";

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
