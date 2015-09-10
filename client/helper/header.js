Template.header.helpers({
    shortString: function(string) {
        var stringLength = string.length;
    	if( stringLength > 25){
    		return string.substr(0,25)+'...';
    	}
    	else{
            string = string.split("\n",1);
    		return string;
    	}
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
        };
        return notes;
    }
});