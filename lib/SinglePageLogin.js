var SinglePageLogin;

SinglePageLogin = {
  settings: {
    loginTitle: 'Single page login',
    signupTitle: 'Single page sign up',
    forgotPasswordTitle: 'Retrieve password',
    canRetrievePassword: true,
    passwordSignupFields: 'EMAIL_ONLY',
    forbidClientAccountCreation: false,
    routeAfterLogin: 'initialMenu',
    routeAfterSignUp: 'initialMenu',
    forceLogin: true,
    exceptRoutes: ['termsAndConditions', 'about','singlePageSignUp'],
  },

  config: function(appConfig) {
    this.settings = _.extend(this.settings, appConfig);
    if (Meteor.isClient) {
      Accounts.ui.config({
        //USERNAME_AND_EMAIL, USERNAME_AND_OPTIONAL_EMAIL, USERNAME_ONLY, EMAIL_ONLY
        passwordSignupFields: this.settings.passwordSignupFields
      });
    }
    Accounts.config({
      forbidClientAccountCreation: this.settings.forbidClientAccountCreation
    });


    Router.map(function() {
      this.route('singlePageLogin', {
        path: '/login',
      });
      this.route('singlePageSignUp', {
        path: '/signup',
      });
      this.route('singlePageForgotPassword', {
        path: '/forgot-password',
      });

    });

     requireLogin = function(pause) {
      if (!Meteor.user()) {
        /*if (Router.current().route.name   === 'singlePageLogin'){
  this.render('singlePageSignUp');
        } else{*/
        this.render('singlePageLogin');
      //} 
        pause();
      }
    }

    requireNoLogin = function(pause) {
      if (Meteor.user()) {
   Router.go('initialMenu');
      }
    }

Router.onBeforeAction(requireNoLogin, {only: ['singlePageLogin', 'singlePageForgotPassword', 'singlePageSignUp']});
    if(this.settings.forceLogin){
      this.settings.exceptRoutes.push('singlePageLogin','singlePageForgotPassword');
      Router.onBeforeAction(requireLogin, {only: ["account", "addExperience","guideSignUp"]});
      
    }
  }
};

this.SinglePageLogin = SinglePageLogin;