Template.note.events({
	'focus #editNote': function(e){
		var notesNumber = $('#noteNumber').attr('data');
		if(notesNumber == 0){
			var search = $('#actionSearch').val();
			if(search == ""){
				var date = new Date();
				Notes.insert({
					content: 'New note', 
					dateNote: date.valueOf(), 
					userId: localStorage.getItem("Meteor.userId")
				});
			}else{
				Session.set("search_query", '');
				$("#actionSearch").val('');
				setTimeout(function(){$(".hamster-scrollbar a").first().click()}, 50); // too bad
			}			
		}
		var search = $('#actionSearch').val();
		if(search != ""){
			$('#actionSearch').val('');
			Session.set("search_query", '');
			
		}
		
	},
	'input #viewEditNoteDarkMode': function(e){
		e.preventDefault();
		var note = $('#editNoteDarkMode').val();
		var date = new Date();
		var id = $(e.currentTarget).attr('data');
		Notes.update({_id:id},{$set: {
			content: note,
			dateNote : date.valueOf()
		}});
		Session.set('noteDateNote', date.valueOf());
		$('#editNote').val(note);
	},
	'input #viewEditNote': function(e){
		e.preventDefault();
		var note = $('#editNote').val();
		var date = new Date();
		var id = $(e.currentTarget).attr('data');
		Notes.update({_id:id},{$set: {
			content: note,
			dateNote : date.valueOf()
		}});
		Session.set('noteDateNote', date.valueOf());
		$(".hamster-scrollbar a").first().click();
	},
	'click #actionAddNote': function (e) {
		var date = new Date();
		Notes.insert({
			content: 'New note', 
			dateNote: date.valueOf(), 
			userId: localStorage.getItem("Meteor.userId")
		});
		$(".hamster-scrollbar a").first().click();
		setTimeout(function(){$("#editNote").focus()}, 50); // too bad
	},
	'click #actionDeleteNote': function (e) {
		var id = $(e.currentTarget).attr('data');
		Notes.remove(({_id:id}));
		var notesNumber = $('#noteNumber').attr('data');
		if(notesNumber == 1){
			var date = new Date();
			Notes.insert({
				content: 'New note', 
				dateNote: date.valueOf(), 
				userId: localStorage.getItem("Meteor.userId")
			});
		}
		$(".hamster-scrollbar a").first().click();
		setTimeout(function(){$("#editNote").focus()}, 50); // too bad
	},
	'click #actionDarkMode': function (e) {
		$('.darkMode').transition('fade up');
	},
});