var POST_HEIGHT = 250;
var Positions = new Meteor.Collection(null);

Template.guidePage.rendered = function() {
  if(!Session.get('loadingMore')){
    if (Router.current().route.getName()    !== 'postPage'){
    Session.set('numberOfNewPost',Session.get('numberOfNewPost')+1);
       $('.glyphicon-time').addClass("symbols2");
       $('active').addClass("red");
       var post = Posts.findOne({},{sort: {submitted: -1}});
       subs.subscribe('photos', post._id);
       if ($('.myElements').wookmarkInstance) {
            $('.myElements').wookmarkInstance.clear();
          }
var   handler = $('.myElements');
       handler.wookmark({
          // Prepare layout options.
          autoResize: true, // This will auto-update the layout when the browser window is resized.
          container: $('.js-masonry'), // Optional, used for some extra CSS styling
          offset: 5, // Optional, the distance between grid items
          outerOffset: 20, // Optional, the distance to the containers border
          //itemWidth: 310 // Optional, the width of a grid item
          fillEmptySpace: false // Optional, fill the bottom of each column with widths of flexible height
      });
     }

}

};


Template.guidePage.helpers({



  removeWookMarkOnSmallScreen: function() {
   if( !Session.get('removeWookMarkOnSmallScreen')){

return 'myElements';

   }
   return '';
    },


  /* photos: function () {

     return Photos.findOne({'_id':this.photoId});// ,{sort: {"createdAt": -1}});
    },*/

     profileImage: function () {

     return profileImages.findOne({'_id':this.profilePhoto._id});// ,{sort: {"createdAt": -1}});
    },




date: function date(){

 test = (new Date(this.submitted)).toISOString()
return jQuery.timeago(test);   
},


comments: function() {
    return Comments.find({postId: this._id});
  },

 showComments: function(commentsCount) {
    return commentsCount!==0;
  },

  ownPost: function() {
    return this.userId == Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },



  upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return true;
    } else {
      return false;
    }
  },

   upvotedClass2: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'upvotable';
    } else {
      return '';
    }
  },

    flaggedbyCurrentUser: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.flaggers, userId)) {
      return true;
    } else {
      return false;
    }
  },

     postWidth: function() {

  },
  attributes: function() {
  /*  var post = _.extend({}, Positions.findOne({postId: this._id}), this);
    var newPosition = post._rank * POST_HEIGHT;
    var attributes = {};
    
    if (_.isUndefined(post.position)) {
      attributes.class = 'post invisible';
    } else {
      var delta = post.position - newPosition;      
      attributes.style = "top: " + delta + "px";
      if (delta === 0)
        attributes.class = "post animate"
    }
    
    Meteor.setTimeout(function() {
      Positions.upsert({postId: post._id}, {$set: {position: newPosition}})
    });
    
    return attributes;
    */
  }
});
/*
Template.experience.events({


'click .removalRequest': function(e) {
    e.preventDefault();
    
r = confirm("Remove post?");

if (r === true) {
   var currentPostId = this._id;
      Posts.remove(currentPostId);
      history.back();
//Router.go('newPosts');
}

    },




'click .goAway': function(e) {
var tempScrollTop = $(window).scrollTop();

Session.set('previousScrollPosition', tempScrollTop);


},

'click .showPlaceToComment': function(e) {
    e.preventDefault();

},

  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  },


    'click .flag': function(e) {
    e.preventDefault();
    Meteor.call('flagUp', this._id);
  },

  });*/


  