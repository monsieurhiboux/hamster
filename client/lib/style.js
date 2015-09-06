Template.layout.onRendered(function(){
});

Template.header.onRendered(function(){
  this.$('.pop').popup();
  this.$(".hamster-scrollbar").mCustomScrollbar({theme:"minimal-dark"});
});

Template.note.onRendered(function(){
  this.$('.pop').popup();
  this.$("textarea").mCustomScrollbar({theme:"minimal-dark"});
});
