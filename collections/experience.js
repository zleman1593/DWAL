Experience = new Meteor.Collection('experience');
Experience2 = new Meteor.Collection('experience2');
//If this doesnt work this command  needs to runn his command in mongo
//db.experience.ensureIndex( { loc: "2dsphere" });

Experience2.allow({
  update: ownsDocument,
  remove: ownsDocument
});
Experience2.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  description: {
    type: String,
    label: "Description of Experience",
    max: 1000
  },
   hourlyRate: {
    type: Number,
    label: "Hourly rate",
     max: 500
  },

}));

useIt = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  description: {
    type: String,
    label: "Description of Experience",
    max: 1000
  },
   hourlyRate: {
    type: Number,
    label: "Hourly rate",
     max: 500
  },
});


Experience.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});

Meteor.methods({

  post: function(postAttributes) {
    var user = Meteor.user();
    //check(postAttributes, useIt);
    
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to submit an Experience");
    

    //place = Session.get("meetLocation");
    
    // pick out the whitelisted keys
    var post = _.extend(postAttributes, {
      //dates: [],
      guideId: user._id, 
    author: user.name, 
      submitted: new Date().getTime(),
      reviewCount: 0,
      deleted: false,
        away: false,
      reviews: 0,
     // loc: { type: "Point", coordinates: [ place.geometry.location.B, place.geometry.location.k ] },
    });
    console.log(post);

//post2 = _.pick(post, 'title', 'guideId');
    var experienceId = Experience.insert(post);


 Images.update({_id: post.experienceMainPhoto._id}, {//cfs.images.filerecord
      $set: {"experienceId": experienceId}}
      );
    return experienceId;
  },
  
  upvote: function(postId) {
    var user = Meteor.user();
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to upvote");
    
    Experience.update({
      _id: postId, 
      upvoters: {$ne: user._id}
    }, {
      $addToSet: {upvoters: user._id},
      $inc: {votes: 1}, 
    });
  },


  
});