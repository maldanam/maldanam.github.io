// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function ($) {


  // ------------------------------------
  // ini.READY

  $(document).ready(function (){

    $('#nav-btn').on( 'click', function( evt ) {
      evt.preventDefault();
      $('#navigation').toggleClass( 'mobile-open' );
    });


  });

  // end.READY
  // ------------------------------------



}(window.jQuery || window.$));

