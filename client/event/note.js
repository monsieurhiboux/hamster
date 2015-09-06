Template.note.events({
	'focus #viewAddNote': function(e){
		var date = new Date();
		Notes.insert({
			content: 'New note', 
			dateNote: date.valueOf(), 
			userId: localStorage.getItem("Meteor.userId")
		});
		$( "#viewEditNote form" ).focus();
	},
	'input #viewEditNote': function(e){
		e.preventDefault();
		var note = $('#editNote').val();
		if(note != false){
			var date = new Date();
			var id = $(e.currentTarget).attr('data');
			Notes.update({_id:id},{$set: {
				content: note,
				dateNote : date.valueOf()
			}});
			Session.set('noteDateNote', date.valueOf());
		};
	},
	'click #actionAddNote': function (e) {
		var date = new Date();
		Notes.insert({
			content: 'New note', 
			dateNote: date.valueOf(), 
			userId: localStorage.getItem("Meteor.userId")
		});
	},
	'click #actionDeleteNote': function (e) {
		var id = $(e.currentTarget).attr('data');
		Notes.remove(({_id:id}));
		$(".hamster-scrollbar a").first().click();
	}
});