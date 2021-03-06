
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
                  experienceMainPhoto: Session.get("imageId"),
                });

                  	return docSubmit;
                  }
    },


  /*onSuccess: function(operation, result, template) {
    console.log("Insert Result: sucess:", result);
  }, */

  after: {
      post: function(error, result) {
        if (error) {
          alert("Insert Error:", error);
        } else {
          //Session.set("InsertResult",result);
          Router.go("experiencePage",{_id: result});
        }
      },



     }
   }


});

Template.addExperience.events({
  'change .fileUpload': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      var imageId = Images.insert(file, function (err, fileObj) {
        Session.set("imageId",imageId);
        alert("Experience Image Uploaded!");
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
  },
/*

'click .submitExperience': function(event, template) {
Router.go('experiencePage',);
},*/

});


Template.imageView.helpers({
  image: function () {
   // var experience = Experience.findOne();
// This loads the data of the photo into event.photo
// You can include it in your collection transform function.
//var what = experience.experienceMainPhoto.getFileRecord();
//alert(what);
//alert(experience);
    return Images.findOne(Session.get('imageId')); // Where Images is an FS.Collection instance
  }
});


