Template.header.events({
	'click #actionViewNote': function (e) {
		var id = $(e.currentTarget).attr('data');
	    var note = Notes.findOne(({_id:id}));
	   	Session.set('noteId', note._id);
	    Session.set('noteContent', note.content);
	    Session.set('noteDateNote', note.dateNote);
	    Session.set('noteUserId', note.userId);
	    $(".item").removeClass( "active" )
	    $(e.currentTarget).addClass( "active" );
	    $('#editNote').val(note.content); // Too bad
	},
	'input #actionSearch': function(e){
		var search = $('#actionSearch').val();
		$("#editNote").val('');
		$(".item").removeClass( "active" )
		Session.set("search_query", search);
		if(search == ""){
			setTimeout(function(){$(".hamster-scrollbar a").first().click()}, 50); // too bad
		}
	}	
});