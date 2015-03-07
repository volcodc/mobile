import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('story', {path: '/story/:story_id/:story_slug'});
	this.resource('category', {path: '/category/:category_id/:category_slug'});
});

export default Router;
