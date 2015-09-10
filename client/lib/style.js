Template.note.onRendered(function(){
	$('.pop').popup({hoverable: true});
});

Template.header.onRendered(function(){
  this.$(".hamster-scrollbar").mCustomScrollbar({theme:"minimal-dark"});
  setTimeout(function(){$(".hamster-scrollbar a").first().click()}, 50); // too bad
});

Template.share.onRendered(function(){
	this.$('.share').transition('fade');
});
