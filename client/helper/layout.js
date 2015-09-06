Template.layout.helpers({
    shortString: function(string) {
    	var stringLength = string.length;
    	if( stringLength > 10){
    		return string.substr(0,10)+'...';
    	}
    	else{
    		return string;
    	} 
    }
});