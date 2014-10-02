/*
Meteor.startup(function(){

Tracker.autorun(function () {

Session.set("CurrentNumberOfPostsLoaded", Posts.find({}).count());
//TODO:Need to make this school specific
//alert(Router.current().postsLimit());
//if (Session.set("CurrentNumberOfPostsLoaded") !== Router.current().postsLimit()){
//alert('Someone added a post');
//}

});

});
*/


Template.header.helpers({

'click .logOut': function(e) {
    e.preventDefault();
    Router.go('newPosts');
Meteor.logout();
},

searchAppear: function() {


if (Router.current().route.name  !== 'initialMenu'){
      $(".logo").addClass("logoStay");
      //$(".logo").removeClass("hideLogo");

   setTimeout(doSomething, 500);

function doSomething() {
  initializeAuto();
google.maps.event.addDomListener(window, 'load', initialize);
}
  return  true;
} 
$(".logo").removeClass("logoStay");
  return false;


},
permDark: function() {

if (Router.current().route.name  !== 'initialMenu'){
  return  'navbar-shrink-perm';
} 
  return '';
},

permWhiteText: function() {

if (Router.current().route.name  !== 'initialMenu'){
  return  'whiteNavbarLinks';
} 
  return '';
},


  'loggedIn': function() {
    alert(Meteor.userId());
return !! Meteor.userId();

},


largeDetail: function() {


if (Router.current().route.name  === 'postPage' || Router.current().route.name   === 'pref'){
  return 'hide-nav-things';
} 

  return '';


},
  title: function() {

   /* var args = Array.prototype.slice.call(arguments, 0);
    args.pop();
    
    var active = _.any(args, function(name) {
      return Router.current() && Router.current().route.name === name
    });*/
    
if (Router.current().route.name    === 'postPage'){

  return 'Confession Details';
} else if (Router.current().route.name   === 'pref'){
    return 'Preferences';
  }
  return '';
  },


activeRoute: function() {

//$(".navbar").off( "touchstart", ".glyphicon-chevron-left");
//$(".glyphicon-chevron-left").off( "click");

/*function notify() {
   e.preventDefault();
history.back();
}

$( ".glyphicon-chevron-left").on( "touchstart", notify );*/

   /* var args = Array.prototype.slice.call(arguments, 0);
    args.pop();
    
    var active = _.any(args, function(name) {
      return Router.current() && Router.current().route.name === name
    });*/
    
if (Router.current().route.name    === 'postPage' || Router.current().route.name    === 'pref'){

  return false;
} else{
    return true;
  }
  },

	
  activeRouteClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();
    
    var active = _.any(args, function(name) {
      return Router.current() && Router.current().route.name === name
    });
    
    return active && 'active';
  }
});

Template.header.events({
/*

'click li': function(e) {
        // check if window is small enough so dropdown is created
    $(".navbar-collapse").removeClass("in").addClass("collapse");
  

},*/

'click #logOut': function(e) {
    e.preventDefault();
Meteor.logout();
},



'click .glyphicon-chevron-left' : function(e) {
    e.preventDefault();
history.back();

$(window).scrollTop(Session.get('previousScrollPosition'));
//fadeContentIn();
},

'click .discuss' : function(e) {
    e.preventDefault();
history.back();
$(window).scrollTop(Session.get('previousScrollPosition'));
//fadeContentIn();
},

'click .navNewPosts': function(e) {
 $('.glyphicon-time').removeClass("symbols2");
       $('active').removeClass("red");
       $('html, body').animate({scrollTop:0}, 500);
},


'click .navSubmit': function(e) {
    e.preventDefault();
     Session.set('submit', true);
$('.popup-with-form').get(0).click();



},


});


fadeContentIn = function() {
    $('#main').addClass("animated fadeInRight");
    $('.small-title').addClass("animated fadeInRight");
     $('.glyphicon-chevron-left').removeClass("animated fadeInRight");
        setTimeout(doSomething, 2000);

function doSomething() {
  $('#main').removeClass("animated fadeInRight");
  $('.small-title').addClass("animated fadeInRight");
   $('.glyphicon-chevron-left').removeClass("animated fadeInRight");

}

    return $('footer').removeClass("hide");
}




function initializeAuto() {
  var input = ( document.getElementById('pac-input2'));
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    var place = autocomplete.getPlace();
    Session.set("selectedLocation", place);
    
});

  };
  




