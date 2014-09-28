
  Session.set('selectedLocation', 12);

  Template.mainPage.helpers({


  

    
  });

  Template.mainPage.events({
    'click .search-button': function (e) {
e.preventDefault();

      Session.set("selectedLocation", 12345);
    }
  });



  Template.postsList.rendered = function() {

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
function initialize() {
  var input = ( document.getElementById('pac-input2'));
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    //infowindow.close();
    //marker.setVisible(false);
    var place = autocomplete.getPlace();

      alert(place.geometry.location);
    
});

  };

google.maps.event.addDomListener(window, 'load', initialize);


};