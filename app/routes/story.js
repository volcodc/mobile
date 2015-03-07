import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return {id: params.story_id, slug: params.story_slug};
	}
});