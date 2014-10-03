Template.experiencePage.helpers({
  comments: function() {
    return Comments.find({postId: this._id});
  },

  owner: function() {
if (Router.current().route.name   === 'experiencePage'  && this.userId == Meteor.userId()){
  return true;
} else{
    return false;
  }
  },

    image: function () {
  //  return Images.findOne(); // Where Images is an FS.Collection instance
    return Images.findOne({'_id':this.experienceMainPhoto._id});// ,{sort: {"createdAt": -1}});
  },


});


Template.experiencePage.events({
"click .photo-link": function (e, template) {
      MeteorCamera.getPicture(function (error, data) {
        // we have a picture
        if (!error) {
          onSuccess(data, template);
        } else{
          alert('Error');
        }
      });
    },
});



