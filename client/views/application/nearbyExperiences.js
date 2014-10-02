Template.nearbyExperiences.helpers({
  experience: function() {
  	 place = Session.get('selectedLocation');
 return Experience.find({loc: {$near: {$geometry: {type:"Point", coordinates: [ place.geometry.location.B ,  place.geometry.location.k ]}, $maxDistance: 60000, $minDistance: 0,
  }}});
  
  },

});

/*
Template.nearbyExperiences.events({


'click .toDetails': function (e) {
      e.preventDefault();

Route.go("account")
    },
*/
//});