Meteor.publish('Experiences', function(options) {
  //return Posts.find({flagCount: {$lt: 5}, school: school }, options);
  //return Experience.find(options);
  return Experience.find(options);
  //return Experience.find({"loc": {type:"Point"}});
  //return Experience.find({ _id: "PhQQprPrFzRTMkKRW"});
  //return Experience.find({"loc.type":"Point"});
   //return Experience.find({$near: [-69.963793,43.906732], $maxDistance:60000});
//return Experience.find({});
});

Meteor.publish('experiencesWithPhotos', function(options){


var posts = Experience.find(options);
 var postIds = posts.map(function(p) { return p._id });
console.log(postIds);
var test = Images.find({experienceId: {$in: postIds}});
  return [
posts,test]
});

Meteor.publish('singleImage', function(postId) {
  //return Images.find({});
   return Images.find({experienceId:postId});
});

Meteor.publish('singleImageByOwnId', function(ownId) {
   return Images.find({_id:ownId});
});

Meteor.publish('uploadedPhotos', function() {
  return  Images.find({});
});

Meteor.publish('singleExperience', function(id) {
  return id && Experience.find(id);
});


Meteor.publish('Reviews', function(postId) {
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});

Meteor.publish('photos', function(postId) {
  return Photos.find({postId:postId});
});

Meteor.publish('photosWithPhotoId', function(photoId) {
  return Photos.find(photoId);
});

Accounts.onCreateUser(function(options, user) {
 
//var emailInfo = _.find(user.emails, function(thisEmail) { return thisEmail });
//var email =  emailInfo["address"];
 user.plannedFutureExperiences = [];
 user.wishListExperiences = [];
user.name = '';
return user;
});



Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                              {fields: {'name': 1,'plannedFutureExperiences': 1, 'wishListExperiences': 1}});
                          
  } else {
    this.ready();
  }
});

   Accounts.validateLoginAttempt(function(parameters) {

      if (parameters.user && parameters.user.emails && (parameters.user.emails.length > 0)) {
        // return true if verified email, false otherwise.
        var found = _.find(
                           parameters.user.emails, 
                           function(thisEmail) { return thisEmail.verified }
                          );

        if (!found) {
          throw new Meteor.Error(333, 'Thank you for registering. Please open your confirmation email to complete registration.');
        }
        return found && parameters.allowed;
      } else {
        console.log("user has no registered emails.");
        return false;
      }
    });

