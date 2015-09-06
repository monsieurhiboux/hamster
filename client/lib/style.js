Template.layout.onRendered(function(){
});

Template.header.onRendered(function(){
  this.$('.pop').popup();
  
});

Template.note.onRendered(function(){
  this.$('.pop').popup();
});
