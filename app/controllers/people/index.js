import Ember from 'ember';

export default Ember.ArrayController.extend({
  arrangedContent: Ember.computed('content.[]', function(){
     return this.get('content').filter(function(person){
      return person.get('age') >= 30;
    });
  })
});
