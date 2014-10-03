Guides = new Meteor.Collection('guides');
Guides2 = new Meteor.Collection('guides2');


Guides.allow({
  update: ownsDocument,
  remove: ownsDocument
});
Guides2.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name",
    max: 40
  },
   lastName: {
    type: String,
    label: "Last Name",
    max: 40
  },
  description: {
    type: String,
    label: "About You",
    max: 2000
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

/*
Experience.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});*/



Meteor.methods({

  becomeGuide: function(guideAttributes) {
    var user = Meteor.user();
    //check(guideAttributes, useIt);
    
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to become a guide");
    
    var guide = _.extend(guideAttributes, {
      userId: user._id, 
      guideSince: new Date().getTime(),
      reviewCount: 0,
      reviews: 0,
    });
    var guideId = Guides.insert(guide);

console.log(guide);
console.log(guide.profilePhoto._id);
 profileImages.update({_id: guide.profilePhoto._id}, {//cfs.images.filerecord
      $set: {"guideId": guideId}}
      );

Meteor.users.update({_id:Meteor.user()._id}, {$set:{"guide": true}});
Meteor.users.update({_id:Meteor.user()._id}, {$set:{"guideId": guideId}});

    return guideId;
  },
  
  


  
});