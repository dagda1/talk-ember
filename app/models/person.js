import Ember from 'ember';
import DS from "ember-data";

var Person = DS.Model.extend({
  firstName: DS.attr('string'),
  surname: DS.attr('string'),
  age: DS.attr('number'),
  gender: DS.attr('string'),

  fullName: Ember.computed('firstName', 'surname', function(){
    return this.get('firstName') + " " + this.get('surname');
  })
});

Person.reopenClass({
  FIXTURES: [
  {
    id: 1,
    firstName: 'Paul',
    surname: 'Cowan',
    age: 42,
    gender: 'M'
  },
  {
    id: 2,
    firstName: 'Donal',
    surname: 'Murphy',
    age: 82,
    gender: 'M'
  },
  {
    id: 3,
    firstName: 'May',
    surname: 'Peters',
    age: 42,
    gender: 'F'
  },
  {
    id: 4,
    firstName: 'Alex',
    surname: 'Higgins',
    age: 23,
    gender: 'M'
  },
  {
    id: 5,
    firstName: 'George',
    surname: 'Best',
    age: 18,
    gender: 'M'
  }
]
});

export default Person;