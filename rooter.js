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