Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/', {
	name: 'Note',
	data: function(){
		var notes = Notes.find({'userId':localStorage.getItem("Meteor.userId")},{sort: {'dateNote': -1}});
		return {
			notes : notes
		};

	},
	waitOn: function(){
		return Meteor.subscribe("getNotes");
	},
	action: function () {
	    if (this.ready()){
	    	document.title = "Hamster";
	      	this.render('note');

	    }
	}
});