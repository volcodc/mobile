import Ember from 'ember';

export default Ember.ArrayController.extend({
  firstThree: function () {
    var three = Ember.A();

    this.get('model').forEach(function (item, index) {
      if (index < 3) {
        three.pushObject(item);
      }
    });

    return three;
  }.property(),

  firstFour: Ember.computed(function () {
    var four = Ember.A();

    this.get('model').forEach(function (item, index) {
      if (index < 4) {
        four.pushObject(item);
      }
    });

    return four;
  }),

  poopStories: Ember.computed.filterBy('model', 'headline', 'poop')
});
