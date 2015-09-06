Meteor.publish("getNotes", function(){
    return Notes.find();
});