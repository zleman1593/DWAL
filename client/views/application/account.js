Template.account.helpers({
  email: function() {
        return Meteor.user().emails[0].address;
    },


});