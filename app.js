var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://52.24.136.109:27017,52.35.94.222:27017,52.33.102.9:27017/test?w=0&readPreference=secondary";



    MongoClient.connect(url, function(err, db) {
        var cursor =db.collection('mycol').find();
        var doc_total = {};
        var index = 0;
        cursor.each(function(err, doc) {
          console.log("Doc is "+doc)
          if (doc != null) {
             doc_total[index++] = doc;
          } else {
              db.close();
              res.end(JSON.stringify((doc_total),null,4));
          }
       });
    });
}       


