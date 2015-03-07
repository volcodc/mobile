import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return Ember.$.ajax({
			url:'http://ftpcontent.worldnow.com/kotv/custom/ps/241455.json',
			dataType:'jsonp',
			jsonpCallback:'Items',
			}).then(function(data){
				return data.Stories;
		});
	}
});