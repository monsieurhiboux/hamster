Template.share.helpers({
    momentShort: function(string) {
        return moment(string).calendar();
    },
    breaklines: function(text){
        text = text.replace(/\n/g, "<br />");
        return text;
    }
});