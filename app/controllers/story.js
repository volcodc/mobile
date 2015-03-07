import Ember from 'ember';

export default Ember.ObjectController.extend({
  combinedAttributes: Ember.computed('headline', 'body', function () {
    return this.get('headline') + this.get('body');
  })
});
