import Ember from 'ember';
import Story from '../models/story';

export default Ember.Route.extend({
  beforeModel: function (transition) {
    // pause for promises
    // if the user is not logged in transition.abort(), this.transitionTo('login');
  },
  model: function (params) {
    // pause for promises
    // unless you passed in a model
    // this.store.find('story'); // this sets model in controller by default.
    return this.store.find('story');
  },
  afterModel: function (model, transition) {
    // pauses for promises
  },
  setupController: function (controller, model) {
    console.log(controller);
    console.log(model);
    controller.set('model', model);
    // controller.set('model', model) is what this._super(controller, model) does for you by default.
    // this._super(controller, model); // this makes sures the controller has it's model property set to whatever the model hook returned.
    // is supposed to pause for promises?
  }
});
