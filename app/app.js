import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'talk-ember',
  Resolver: Resolver
});

App.speaker = Ember.Object.createWithMixins({
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

loadInitializers(App, 'talk-ember');

export default App;
