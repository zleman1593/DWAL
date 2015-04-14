Template.experiencePage.helpers({
  comments: function() {
    return Comments.find({postId: this._id});
  },

  owner: function() {
if (Router.current().route.getName()   === 'experiencePage'  && this.userId == Meteor.userId()){
  return true;
} else{
    return false;
  }
  },

    image: function () {
  //  return Images.findOne(); // Where Images is an FS.Collection instance
    return Images.findOne({'_id':this.experienceMainPhoto._id});// ,{sort: {"createdAt": -1}});
  },

     guide: function () {
       subs.subscribe('singleGuideWithphoto', this.guideId);
  //  return Images.findOne(); // Where Images is an FS.Collection instance
    return Guides.findOne(this.guideId);// ,{sort: {"createdAt": -1}});
  },

 profileImage: function () {

     return profileImages.findOne({'_id':this.profilePhoto._id});// ,{sort: {"createdAt": -1}});
    },

});




