// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
app.use(express.static('public'));

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = process.env.MONGOLAB_URI_SEARCH;
var collection = "queris";

var request = require('request');
var urlApi = "https://www.googleapis.com/customsearch/v1?key=AIzaSyC4WkvWSwOGdbk4ovpraB-FfO6Dz3xXnpc&searchType=image&num=10&alt=json&cx=002444273030008158006:qoepvron3vy";
//urlApi = "http://tehama.ru"


var result = {};
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/api/imagesearch/:searchQuery", function (req, res) {
  console.log(req);
  var searchQuery = req.params.searchQuery;
  var offset = req.query.offset ? req.query.offset : 10;

  //console.log(req.params);

  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      result = {id: 'Unable to connect to the mongoDB server. Error:'};
      res.end(JSON.stringify(result));
    } else {
      console.log('Connection established to', url);
      var col = db.collection(collection);
      col.findOne({name: "last"}, (err, doc) => {
        if (err) {
          console.log('Unable to find item. Error:', err);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          result = {id: 'Unable to find item'};
          res.end(JSON.stringify(result));
        } else {
     //     console.log(doc)
          if(doc.queries.length >= 10) {
            doc.queries.pop()
          }
          doc.queries.unshift({when: new Date(), term: searchQuery});
          col.updateOne(
            {name: "last"},
            {$set: {queries: doc.queries}},
            err => {
              console.log('Unable to update item. Error:', err);
            }
          )
          
          request( urlApi + "&start=" + offset + "&q=" + searchQuery, (error, response, body) => {              
                res.writeHead(200, { 'Content-Type': 'application/json' });
                result =JSON.parse(body).items.map( item => {
                  return {
                   url: item.link,
                   snippet: item.title,
                   thumbnail: item.image.thumbnailLink,
                   context: item.image.contextLink
                  }
                });
                res.end(JSON.stringify(result));
            
          }) 
      /*    res.writeHead(200, { 'Content-Type': 'application/json' });
          result = testRequest.items.map( item => {
            return {
             url: item.link,
             snippet: item.title,
             thumbnail: item.image.thumbnailLink,
             context: item.image.contextLink
            }
          });
          res.end(JSON.stringify(result));*/
        }
      })
    }
  });

});
app.get(/\/api\/imagesearch/, function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  result = {error: "wrong request"};
  res.end(JSON.stringify(result));
});

app.get("/api/latest/imagesearch", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      result = {id: 'Unable to connect to the mongoDB server. Error:'};
      res.end(JSON.stringify(result));
    } else {
      console.log('Connection established to', url);
      var col = db.collection(collection);
      col.findOne({name: "last"}, (err, doc) => {
       if (err || doc == null) {
         console.log("---")
          res.writeHead(200, { 'Content-Type': 'application/json' });
          result = {error: 'This url is not on the database'};
          res.end(JSON.stringify(result));
       } else {
         res.writeHead(200, { 'Content-Type': 'application/json' });
         result = doc.queries
         res.end(JSON.stringify(result));
        db.close();
       }
      })
    }
  });

});

app.get(/.*/, function (req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  result = "Page not found";
  res.end(result);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
