import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var speaker  = Ember.Object.createWithMixins({
      firstName: 'Paul',
      surname: 'Cowan',
      age: 42,
      mood: 'calm',
      isCalm: Ember.computed.equal('mood', 'calm'),

      isAngry: Ember.computed.equal('mood', 'angry'),

      fullName: Ember.computed('firstName', 'surname', function(){
        return this.get('firstName') + " " + this.get('surname');
      }),

      isOld: Ember.computed('age', function() {
        return this.get('age') >= 42;
      })
    });

    return speaker;
  }
});
