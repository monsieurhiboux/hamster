Template.note.events({
	'focus #editNote': function(e){
		var notesNumber = $('.hamster-scrollbar').attr('data');
		if(notesNumber == 0){
			var date = new Date();
			Notes.insert({
				content: 'New note', 
				dateNote: date.valueOf(), 
				userId: localStorage.getItem("Meteor.userId")
			});
			
		}
		var note = $('#editNote').val();
		if(note == ""){
			$(".hamster-scrollbar a").first().click();
		}
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
		$(".hamster-scrollbar a").first().click();
	},
	'click #actionDeleteNote': function (e) {
		var id = $(e.currentTarget).attr('data');
		Notes.remove(({_id:id}));
		var notesNumber = $('.hamster-scrollbar').attr('data');
		if(notesNumber == 1){
			var date = new Date();
			Notes.insert({
				content: 'New note', 
				dateNote: date.valueOf(), 
				userId: localStorage.getItem("Meteor.userId")
			});
		}
		$(".hamster-scrollbar a").first().click();
	}
});