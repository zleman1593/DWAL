Template.nearbyExperiences.helpers({
  experience: function() {
  	 place = Session.get('selectedLocation');
 return Experience.find({loc: {$near: {$geometry: {type:"Point", coordinates: [ place.geometry.location.B ,  place.geometry.location.k ]}, $maxDistance: 60000, $minDistance: 0,
  }}});
  
  },

   none: function() {

 
  	if (!Session.get('selectedLocation')){
  		return true;

  	} 
  	 var place = Session.get('selectedLocation');
  		
if(Experience.find({loc: {$near: {$geometry: {type:"Point", coordinates: [ place.geometry.location.B ,  place.geometry.location.k ]}, $maxDistance: 60000, $minDistance: 0,
  }}}).count() < 1){
return true;
}

return false;
  
  },


  image: function () {
  //  return Images.findOne(); // Where Images is an FS.Collection instance
    return Images.findOne({'_id':this.experienceMainPhoto._id});// ,{sort: {"createdAt": -1}});
  },



removeWookMarkOnSmallScreen: function() {
   if( !Session.get('removeWookMarkOnSmallScreen')){

return 'masonry_container';

   }
   return '';
    },

    removeWookMarkOnSmallScreenPart2: function() {
   if( !Session.get('removeWookMarkOnSmallScreen')){

return 'js-masonry';

   }
   return '';
    },

});

/*
Template.nearbyExperiences.events({

Template.postsList.created = function() {'click .toDetails': function (e) {
      e.preventDefault();

Route.go("account")
    },
*/
//});


Template.nearbyExperiences.redered = function() {
  handler = $('.myElements');

      handler.wookmark({
          // Prepare layout options.
          autoResize: true, // This will auto-update the layout when the browser window is resized.
          container: $('.js-masonry'), // Optional, used for some extra CSS styling
          offset: 5, // Optional, the distance between grid items
          outerOffset: 20, // Optional, the distance to the containers border
          itemWidth: 400, // Optional, the width of a grid item
          fillEmptySpace: false // Optional, fill the bottom of each column with widths of flexible height
      });


      };
      