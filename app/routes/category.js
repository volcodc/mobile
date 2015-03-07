import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return {id: params.category_id, slug: params.category_slug};
	}
});