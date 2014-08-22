import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TalkEmberENV.locationType
});

Router.map(function() {
  this.resource('people', function(){
    this.resource('person', {path: '/:person_id'});
  });
});

export default Router;
