Reviews = new Meteor.Collection('reviews');

Meteor.methods({
  review: function(reviewAttributes) {
    var user = Meteor.user();
    var experience = Experience.findOne(reviewAttributes.experienceId);
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to leave a review");
      
    if (!reviewAttributes.body)
      throw new Meteor.Error(422, 'Please write some content');
      
    if (!experience)
      throw new Meteor.Error(422, 'You must leave a review on an experience');
    
    review = _.extend(_.pick(reviewAttributes, 'experienceId', 'body', 'commenter','tag'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });
    
    // update the Experience with the number of reviews
    Experience.update(review.experienceId, {$inc: {reviewCount: 1}});
    
    // create the comment, save the id
    review._id = Reviews.insert(review);
  
  
    return review._id;
  }
});