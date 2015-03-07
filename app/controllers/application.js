import Ember from 'ember';



export default Ember.Controller.extend({
	firstObject: function(){
		var model = this.get('model');
		return Ember.Object.create({ arr: model.slice(0, 1) })
	}.property('model'),
	otherObjects: function(){
		var model = this.get('model');
		return Ember.Object.create({ arr:model.slice(1) })
	}.property('model')
});