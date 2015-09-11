Template.note.helpers({
	momentShort: function(string) {
        return moment(string).calendar();
    },
    noteId: function() { return Session.get('noteId'); },
    noteContent: function() { return Session.get('noteContent'); },
    noteDateNote: function() { return Session.get('noteDateNote'); },
    noteUserId: function() { return Session.get('noteUserId'); },
    noteShare: function() { return Session.get('noteShare'); }
});