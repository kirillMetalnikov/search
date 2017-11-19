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

var testRequest = {
 "kind": "customsearch#search",
 "url": {
  "type": "application/json",
  "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
 },
 "queries": {
  "request": [
   {
    "title": "Google Custom Search - cat",
    "totalResults": "2070000000",
    "searchTerms": "cat",
    "count": 10,
    "startIndex": 1,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "002444273030008158006:qoepvron3vy",
    "searchType": "image"
   }
  ],
  "nextPage": [
   {
    "title": "Google Custom Search - cat",
    "totalResults": "2070000000",
    "searchTerms": "cat",
    "count": 10,
    "startIndex": 11,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "002444273030008158006:qoepvron3vy",
    "searchType": "image"
   }
  ]
 },
 "context": {
  "title": "Google"
 },
 "searchInformation": {
  "searchTime": 0.486393,
  "formattedSearchTime": "0.49",
  "totalResults": "2070000000",
  "formattedTotalResults": "2,070,000,000"
 },
 "items": [
  {
   "kind": "customsearch#result",
   "title": "Grey and White Short Fur Cat · Free Stock Photo",
   "htmlTitle": "Grey and White Short Fur \u003cb\u003eCat\u003c/b\u003e · Free Stock Photo",
   "link": "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
   "displayLink": "www.pexels.com",
   "snippet": "Grey and White Short Fur Cat · Free Stock Photo",
   "htmlSnippet": "Grey and White Short Fur \u003cb\u003eCat\u003c/b\u003e · Free Stock Photo",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/",
    "height": 3560,
    "width": 5360,
    "byteSize": 1951980,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1gyfoLrqcuU-k9NLR8njIcjpIqiVxIDWr8M7FZEOCATGgDSQrxX8EFo",
    "thumbnailHeight": 100,
    "thumbnailWidth": 150
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Cat Facts: What Does it Mean When a Cat Wags Its Tail? | petMD",
   "htmlTitle": "\u003cb\u003eCat\u003c/b\u003e Facts: What Does it Mean When a \u003cb\u003eCat\u003c/b\u003e Wags Its Tail? | petMD",
   "link": "http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg",
   "displayLink": "www.petmd.com",
   "snippet": "Cat Facts: What Does it Mean When a Cat Wags Its Tail? | petMD",
   "htmlSnippet": "\u003cb\u003eCat\u003c/b\u003e Facts: What Does it Mean When a \u003cb\u003eCat\u003c/b\u003e Wags Its Tail? | petMD",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "http://www.petmd.com/cat/behavior/evr_ct_what-does-it-mean-when-a-cat-wags-tail",
    "height": 428,
    "width": 590,
    "byteSize": 47966,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMti4PdsmfG3twyUgKSU7dxD86WZK07e0Gg7QelFyGBggweI5vm1jZ_JY",
    "thumbnailHeight": 98,
    "thumbnailWidth": 135
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Silver Tabby Cat Lying on Brown Wooden Surface · Free Stock Photo",
   "htmlTitle": "Silver Tabby \u003cb\u003eCat\u003c/b\u003e Lying on Brown Wooden Surface · Free Stock Photo",
   "link": "https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg",
   "displayLink": "www.pexels.com",
   "snippet": "Silver Tabby Cat Lying on Brown Wooden Surface · Free Stock Photo",
   "htmlSnippet": "Silver Tabby \u003cb\u003eCat\u003c/b\u003e Lying on Brown Wooden Surface · Free Stock Photo",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.pexels.com/photo/silver-tabby-cat-lying-on-brown-wooden-surface-126407/",
    "height": 1163,
    "width": 2067,
    "byteSize": 1168727,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3HxPf-MuF3xtl8M8xsKrk5Ra6sz9fbuzIZMtmKLVbRRpvioilIWf1cY",
    "thumbnailHeight": 84,
    "thumbnailWidth": 150
   }
  },
  {
   "kind": "customsearch#result",
   "title": "cat - Wiktionary",
   "htmlTitle": "\u003cb\u003ecat\u003c/b\u003e - Wiktionary",
   "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
   "displayLink": "en.wiktionary.org",
   "snippet": "cat - Wiktionary",
   "htmlSnippet": "\u003cb\u003ecat\u003c/b\u003e - Wiktionary",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://en.wiktionary.org/wiki/cat",
    "height": 1199,
    "width": 1200,
    "byteSize": 156145,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvS6Sg8dmSD9NFMrjbbjeifkVvjejrwgOzJHooUhAvgGHIqjmjnqAffEMN",
    "thumbnailHeight": 150,
    "thumbnailWidth": 150
   }
  },
  {
   "kind": "customsearch#result",
   "title": "A guide to giving your cats their annual performance review",
   "htmlTitle": "A guide to giving your \u003cb\u003ecats\u003c/b\u003e their annual performance review",
   "link": "https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg",
   "displayLink": "hackernoon.com",
   "snippet": "A guide to giving your cats their annual performance review",
   "htmlSnippet": "A guide to giving your \u003cb\u003ecats\u003c/b\u003e their annual performance review",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://hackernoon.com/a-guide-to-giving-your-cats-their-annual-performance-review-fbf14610305",
    "height": 911,
    "width": 1600,
    "byteSize": 140388,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4uw9FHv-_cezBc-7-oj9kY6uatzn0dM-sdOKWN_p417q57DlZ4YeL0U",
    "thumbnailHeight": 85,
    "thumbnailWidth": 150
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Cats and Humility",
   "htmlTitle": "\u003cb\u003eCats\u003c/b\u003e and Humility",
   "link": "http://buildingontheword.org/wp-content/uploads/2016/08/cat.jpg",
   "displayLink": "buildingontheword.org",
   "snippet": "Cats and Humility",
   "htmlSnippet": "\u003cb\u003eCats\u003c/b\u003e and Humility",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "http://buildingontheword.org/cats-and-humility/",
    "height": 475,
    "width": 632,
    "byteSize": 68826,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjQUxTrOhcY4Q4_1erFaecdcLpnJoou6eQSXIV0CRbuMVvibHeDDmmLcK",
    "thumbnailHeight": 103,
    "thumbnailWidth": 137
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Cat hotel and spa in Kota Bharu ⋆ The Malaysian Times",
   "htmlTitle": "\u003cb\u003eCat\u003c/b\u003e hotel and spa in Kota Bharu ⋆ The Malaysian Times",
   "link": "http://www.themalaysiantimes.com.my/wp-content/uploads/2017/05/06-train-cat-shake-hands.jpg",
   "displayLink": "www.themalaysiantimes.com.my",
   "snippet": "Cat hotel and spa in Kota Bharu ⋆ The Malaysian Times",
   "htmlSnippet": "\u003cb\u003eCat\u003c/b\u003e hotel and spa in Kota Bharu ⋆ The Malaysian Times",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "http://www.themalaysiantimes.com.my/cat-hotel-and-spa-in-kota-bharu/",
    "height": 1599,
    "width": 2400,
    "byteSize": 222242,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdUcTz1i8cODfrSFRKk4op_8pTS2eC-gvapT6XuDKvZql0uZxeeE3a8U",
    "thumbnailHeight": 100,
    "thumbnailWidth": 150
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Cats on Catnip: What Happens to Your Cat When He Does It - Catster",
   "htmlTitle": "\u003cb\u003eCats\u003c/b\u003e on Catnip: What Happens to Your \u003cb\u003eCat\u003c/b\u003e When He Does It - Catster",
   "link": "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
   "displayLink": "www.catster.com",
   "snippet": "Cats on Catnip: What Happens to Your Cat When He Does It - Catster",
   "htmlSnippet": "\u003cb\u003eCats\u003c/b\u003e on Catnip: What Happens to Your \u003cb\u003eCat\u003c/b\u003e When He Does It - Catster",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "http://www.catster.com/cat-behavior/cats-on-catnip-what-happens-to-your-cat-when-he-does-it",
    "height": 400,
    "width": 600,
    "byteSize": 170025,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03jykIryR1MnFMMyo2M8ZCy-pPtl9ZrqAK07nhGVztxvGi7xdGnMn527s",
    "thumbnailHeight": 90,
    "thumbnailWidth": 135
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Cat - Wikipedia",
   "htmlTitle": "\u003cb\u003eCat\u003c/b\u003e - Wikipedia",
   "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Black_white_cat_on_fence.jpg/220px-Black_white_cat_on_fence.jpg",
   "displayLink": "en.wikipedia.org",
   "snippet": "Cat - Wikipedia",
   "htmlSnippet": "\u003cb\u003eCat\u003c/b\u003e - Wikipedia",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://en.wikipedia.org/wiki/Cat",
    "height": 225,
    "width": 220,
    "byteSize": 11763,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmykW-CwmR9IPMj2BZqMwLu-Y-Ws9SYncsyBCoDlQutK0-LgcL1UOyhUo",
    "thumbnailHeight": 108,
    "thumbnailWidth": 106
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Cats are an extreme outlier among domestic animals | Ars Technica",
   "htmlTitle": "\u003cb\u003eCats\u003c/b\u003e are an extreme outlier among domestic animals | Ars Technica",
   "link": "https://cdn.arstechnica.net/wp-content/uploads/2017/06/Fotolia_58941902_Subscription_Monthly_M.jpg",
   "displayLink": "arstechnica.com",
   "snippet": "Cats are an extreme outlier among domestic animals | Ars Technica",
   "htmlSnippet": "\u003cb\u003eCats\u003c/b\u003e are an extreme outlier among domestic animals | Ars Technica",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://arstechnica.com/science/2017/06/cats-are-an-extreme-outlier-among-domestic-animals/",
    "height": 528,
    "width": 900,
    "byteSize": 72540,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VP5LQHW7t1Bo-bjXxWsy9pwX3AzD4K5klTxmUAezdPL96QGSQs6gEuQ",
    "thumbnailHeight": 86,
    "thumbnailWidth": 146
   }
  }
 ]
}

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
          res.writeHead(200, { 'Content-Type': 'application/json' });
          result = {offset: offset, images: testRequest};
          res.end(JSON.stringify(result));
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
         result = doc.queries.items.map( item => {
           return {
            url: item.link,
            snippet: item.title,
            thumbnail: item.image.thumbnailLink,
            context: item.image.contextLink 
           }
         });
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
