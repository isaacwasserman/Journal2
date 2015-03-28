var init = function(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  window.location.href = 'http://m.cr.raritea.com';
  }
  var url = document.getElementById('url').innerHTML;
  document.getElementById('photodiv').style.background = 'url(' + url + ')';
  document.getElementById('map').offsetWidth = 'calc(100% - ' + document.getElementById('not').style.height + ')';
  skrollr.init();
  document.getElementById('map').style.width = 'calc(100% - ' + document.getElementsByClassName('instamage')[0].offsetWidth + 'px)';
  
  if(document.getElementsByClassName('location')[0].innerHTML == ''){
    document.getElementById('map').style.display = 'none';
  }
  else {
    document.getElementById('photodiv').style.backgroundPosition = 'left center';
  }
  
  if(document.getElementsByClassName('location')[0].innerHTML.search('https') != -1){
    document.getElementById('map').style.display = 'inline';
  }
  
  else {
    var maplocation = document.getElementsByClassName('location')[0].innerHTML.replace(' ', '+');
    document.getElementById('map').setAttribute('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCwKHDHxpX2zgxa1pea6DnhunzJyZoDQbM&q=' + maplocation + '&zoom=8&maptype=roadmap');
  }
  
  var mediatype = document.getElementsByClassName('mediatype')[0].innerhtml;
  if(document.getElementById('video').getAttribute('src').search('jpg') != -1){
    document.getElementById('video').style.display = 'none';
  }
  else {
    document.getElementById('photodiv').style.display = 'none';
  }
  if(document.getElementById('video').getAttribute('src').search('mp4') != -1){
    document.getElementById('video').style.display = 'inline';
    document.getElementById('video').style.left = 'calc(50% - ' + document.getElementById('video').offsetHeight / 2 + 'px)';
  }
}

var sound = function(){
  if(init() == false || sound == false){
    document.getElementById('video').volume = 1;
    var sound = true;
  }
  else {
    document.getElementById('video').volume = 0;
    var sound = false;
  }
  
}

var maptype = function(){
  if(document.getElementById('map').getAttribute('src').search('maptype=roadmap') != -1){
    document.getElementById('map').setAttribute('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCwKHDHxpX2zgxa1pea6DnhunzJyZoDQbM&q=' + document.getElementsByClassName('location')[0].innerHTML + '&maptype=satellite');
  }
  else {
    document.getElementById('map').setAttribute('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCwKHDHxpX2zgxa1pea6DnhunzJyZoDQbM&q=' + document.getElementsByClassName('location')[0].innerHTML + '&maptype=roadmap');
  }
}

var stick = function(stickstatus){
  if(stickstatus == true || stickstatus == false){
    document.getElementById('title').style.position = 'fixed';
    document.getElementById('title').style.top = '-30px';
    document.getElementById('title').style.backgroundColor = 'rgba(255, 255, 255, 1)';
    document.getElementById('title').style.width = '100%';
    document.getElementById('title').style.paddingTop = '25px';
    document.getElementById('title').style.left = '-6px';
    document.getElementById('title').style.WebkitFilter = 'drop-shadow(2px 2px 5px black)';
  }
  else{
    document.getElementById('title').style.position = 'inherit';
    document.getElementById('title').style.top = '0px';
    document.getElementById('title').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    document.getElementById('title').style.width = '100%';
    document.getElementById('title').style.padding = '20px';
    document.getElementById('title').style.paddingTop = '3px';
    document.getElementById('title').style.left = '-6px';
    document.getElementById('title').style.WebkitFilter = 'none';
  }
}

var checksticky = function(){
  var titleoffset = document.getElementById('title').getBoundingClientRect().top;
  if(titleoffset <= 12){
    stick(true);
    console.log('stuck');
  }
  else {
    stick(false);
    console.log('un-stuck');
  }
  
  
}