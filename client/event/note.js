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
	'click #actionSecurity': function (e) {
		$('.security-pop').transition('fade up');
	},
	'submit form': function(e) {
        e.preventDefault();
        var crypt_private = new JSEncrypt({
            default_key_size: 2048
        });
        crypt_private.setKey($(e.target).find('[name=private_key]').val());

        var crypt_public = new JSEncrypt({
            default_key_size: 2048
        });
        crypt_public.setKey($(e.target).find('[name=public_key]').val());

        var text = 'CCMED Test Encryption';
        // Encrypt the data with the public key.
        var enc = crypt_public.encrypt(text);

        // Now decrypt the crypted text with the private key.
        var dec = crypt_private.decrypt(enc);

        // Now a simple check to see if the round-trip worked.
        if (dec === text) {
           alert('Passed!');
        } else {
            alert('Unable to run encryption/decryption test with your private/public key. Are you sure they are valid?');
        }
    },
    'click #generate_private_key': function(e, template) {
        $('#generate_private_key').text("Generating...");
        alert('Hit OK to start generating. Your browser may lock up for a moment.');

        crypt = new JSEncrypt({
            default_key_size: 2048
        });
        var dt = new Date();
        var time = -(dt.getTime());
        crypt.getKey();
        dt = new Date();
        time += (dt.getTime());

        $('textarea[name="private_key"]').val(crypt.getPrivateKey());
        $('textarea[name="public_key"]').val(crypt.getPublicKey());
        $('#generate_private_key').text("Generate");
    }
});