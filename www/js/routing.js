App.Router.map(function() {
	this.route("index");
	this.route("home", { path: "/home" });
	this.route("addquote", { path: "/add" });
});

App.IndexRoute = Ember.Route.extend({
	  setupController: function(controller)
	  {
		  App.ViewTitleHeader.set('title', 'Welcome back');
	  }
});

App.HomeRoute = Ember.Route.extend({
	  setupController: function(controller)
	  {
		  App.ViewTitleHeader.set('title', 'Home page');
	  }
});

App.AddquoteRoute = Ember.Route.extend({
	  setupController: function(controller)
	  {
		  App.ViewTitleHeader.set('title', 'Add a quote ?');
	  }
});