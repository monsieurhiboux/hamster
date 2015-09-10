Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/', {
	name: 'Note',
	waitOn: function(){
		return Meteor.subscribe("getNotes");
	},
	action: function () {
	    if (this.ready()){
	    	document.title = "Hamster";
	      	this.render('home');
	    }
	}
});

Router.route('/share/:_id', {
    name: 'Share',
    data: function(){
		var _id = this.params._id;
		var note = Notes.findOne({"_id": _id});
		return {
			note: note
		};
	},
	waitOn: function(){
		return Meteor.subscribe("getNotes");
	},
	action: function () {
	    if (this.ready()){
	    	document.title = "Hamster : sharing";
	      	this.render('share');
	    }
	}
});