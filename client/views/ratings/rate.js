Template.comment.helpers({


    ownComment: function() {
        return this.userId == Meteor.userId();
    },

    submittedText: function() {

        function prettyDate(time) {
            var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
                diff1 = (((new Date()).getTime() - date.getTime()) / 1000),
                diff = Math.abs(diff1),
                day_diff = Math.floor(diff / 86400);


            if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
                return;

            return day_diff == 0 && (
                    diff < 60 && "just now" ||
                    diff < 120 && "1 minute ago" ||
                    diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
                    diff < 7200 && "1 hour ago" ||
                    diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
                day_diff == 1 && "Yesterday" ||
                day_diff < 7 && day_diff + " days ago" ||
                day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
        }
        test = (new Date(this.submitted)).toISOString()

        return jQuery.timeago(test);
        //return new Date(this.submitted).toString();
    }
});


Template.comment.events({




    'click .removalRequest-comment': function(e) {
        e.preventDefault();

        r = confirm("Remove comment?");

        if (r === true) {
            //TODO: Need to implement this
        }

    }


});
