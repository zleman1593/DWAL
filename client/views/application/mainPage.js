
  Template.mainPage.helpers({


  

  });

  Template.mainPage.events({


// Closes the Responsive Menu on Menu Item Click
 'click .navbar-collapse ul li a':function(e) {
    $('.navbar-toggle:visible').click();
    alert("pink");
},


'click .how-it-works':function(e) {
          e.preventDefault();
   // $('.navbar-toggle:visible').click();
 var $anchor = $('.how-it-works');
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
},


  });



Template.mainPage.rendered = function() {

function initialize() {
  var input = ( document.getElementById('pac-input2'));
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    //infowindow.close();
    //marker.setVisible(false);
    var place = autocomplete.getPlace();

      //alert(place.geometry.location.lat());
        //  alert(place.geometry.location.lng());

     Session.set("selectedLocation", place);
    //  location = Session.get('selectedLocation');
  //alert(Session.get("selectedLocation").geometry.location.B);
    
});

  };

initialize();
google.maps.event.addDomListener(window, 'load', initialize);


};