var express = require('express');
var path    = require('path');
var bodyParser = require('body-parser');
var ig = require('instagram-node').instagram();
var app = express();

ig.use({ client_id: 'dd3fb3e9b9ba432b8b018757eae7caef',
         client_secret: '5d9c145fe0964fb2a350f00bf6b2037f' });

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  var tag = 'friendscostarica';
  ig.tag_media_recent(tag, function(err, medias, pagination, remaining, limit) {
    console.log(medias.length);
    var latest = medias[0].images.standard_resolution.url;
    console.log(medias[0]);
    if(medias[0].videos){
      var mediatype = 'video';
      var latest = medias[0].videos.standard_resolution.url;
    }
    console.log(latest);
    if(medias[0].location){
      var maplocation = medias[0].location.name;
    }
    else {
      var maplocation = null;
    }
    var user = medias[0].user.username;
    var fullname = medias[0].user.full_name;
    if(fullname != null && fullname != ''){
      var user = fullname;
    }
    if(medias[0].caption){
      var description = medias[0].caption.text;
    }
    console.log(maplocation);
    
    res.render('home', { latest: latest, location: maplocation, user: user, caption: description, tag: '#' + tag, mediatype: mediatype });
  });
})

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})