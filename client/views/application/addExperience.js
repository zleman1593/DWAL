
Template.addExperience.rendered = function(){

   setTimeout(doSomething, 500);

function doSomething() {
  initializeAuto();
google.maps.event.addDomListener(window, 'load', initialize);
};

  };



function initializeAuto() {
  var input = ( document.getElementById('formLocationInput'));
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    var place = autocomplete.getPlace();
    Session.set("meetLocation", place);
    
});
}


AutoForm.hooks({
  insertExperienceForm: {
    before: {
      "post": function(doc, template) {



place = Session.get("meetLocation");

var docSubmit = _.extend(doc, {
      loc: { type: "Point", coordinates: [ place.geometry.location.B, place.geometry.location.k ] },
    });

      	return docSubmit;
      }
    },
     }
});

Template.addExperience.events({
  'click .fileUpload': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
  }
});