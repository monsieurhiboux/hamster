Template.header.helpers({
    shortString: function(string) {
        var stringLength = string.length;
    	if( stringLength > 25){
    		return string.substr(0,25)+'...';
    	}
    	else{
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
});