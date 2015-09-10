Template.header.helpers({
    shortString: function(string) {
        var stringLength = string.length;
        if(stringLength == 0){
            var string = "New note";
        }
        if(stringLength > 25){
            var string = string.substr(0,25)+'...';
        }
        var string = string.split("\n",1);
    	
    	return string;
    },
    momentShort: function(string) {
        return moment(string).calendar();
    },
    momentShortSet: function(string) {
    	var date = new Date();
        return moment(date.valueOf()).calendar();
    },
    notes: function(){
        var searchVal = Session.get("search_query");
        if (searchVal != null) {
            var notes = Notes.find({userId:localStorage.getItem("Meteor.userId"), content: {$regex: searchVal}},{sort: {'dateNote': -1}});
        }else{
            var notes = Notes.find({userId:localStorage.getItem("Meteor.userId")},{sort: {'dateNote': -1}});
            setTimeout(function(){$(".hamster-scrollbar a").first().click()}, 50); // too bad
        };
        return notes;
    }
});