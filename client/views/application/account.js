Template.account.helpers({
  email: function() {
        return Meteor.user().emails[0].address;
    },

guide: function() {

 if (Meteor.user().guide) {
  return  true;
} 
  return false;
},
});