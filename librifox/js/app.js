// DOMContentLoaded is fired once the document has been loaded and parsed,
// but without waiting for other external resources to load (css/images/etc)
// That makes the app more responsive and perceived as faster.
// https://developer.mozilla.org/Web/Reference/Events/DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {

  // We'll ask the browser to use strict code to help us catch errors earlier.
  // https://developer.mozilla.org/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
  'use strict';

  var translate = navigator.mozL10n.get;

  // We want to wait until the localisations library has loaded all the strings.
  // So we'll tell it to let us know once it's ready.
  //navigator.mozL10n.once(start);

  // ---

  /*function start() {

    var message = document.getElementById('message');

    // We're using textContent because inserting content from external sources into your page using innerHTML can be dangerous.
    // https://developer.mozilla.org/Web/API/Element.innerHTML#Security_considerations
    message.textContent = translate('message');

  }*/


  $("#test_button").click(function() {
    getJSON("https://librivox.org/api/feed/audiobooks/?id=53&format=json"); // test url
  });
});

var searchId = document.getElementById('search');
$("#search").bind("change", function(){
  // Searches through stuff
})

var _xhr; //temp global scope variable for debugging
function getJSON(url) {
  var xhr = new XMLHttpRequest({ mozSystem: true });
  if (xhr.overrideMimeType) {
    xhr.overrideMimeType('application/json');
  }

  var callback = function(e) {
    console.log("error! :(");
    console.log(e);
  }
  xhr.addEventListener('load', function(e) {
    _xhr = xhr;
    console.log(xhr.response);
  });

  xhr.addEventListener('error', callback);
  xhr.addEventListener('timeout', callback);
  xhr.open('GET', url);

  xhr.responseType = 'json';
  //console.log(xhr);
  xhr.send(); //for some reason open doesn't actually send the request :P
}