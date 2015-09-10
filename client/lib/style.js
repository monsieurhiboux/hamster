Template.layout.onRendered(function(){
});

Template.header.onRendered(function(){
  this.$(".hamster-scrollbar").mCustomScrollbar({theme:"minimal-dark"});
  setTimeout(function(){$(".hamster-scrollbar a").first().click()}, 50); // too bad
});

Template.note.onRendered(function(){
});
