Experience = new Meteor.Collection('experience');

Experience.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Experience.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});

Meteor.methods({

  post: function(postAttributes,photoId) {
    var user = Meteor.user();
    
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to submit an Experience");
    
    
    // pick out the whitelisted keys
    var post = _.extend(_.pick(postAttributes,'confession','photoId'), {
      title: "placeholder",
      description: "description goes here",
      location: [],
      dates: [],
      guideId: user._id, 
      author: user.username, 
      submitted: new Date().getTime(),
      reviewCount: 0,
      deleted: false,
      reviews: 0,
    });
    
    var postId = Experience.insert(post);

    return postId;
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