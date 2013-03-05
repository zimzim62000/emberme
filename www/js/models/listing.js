Listing = Ember.Object.extend({
	id: null,
	title: null,
	container : [],
	setOnContainer : function(Quote){
		this.container.pushObject(Quote);
	}
});
