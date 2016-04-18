var app = app || {};

(function () {
	'use strict';

	app.Todo = Backbone.Model.extend({
		
		defaults: {
			title: '',
			completed: false,
			name: 'Jack',
			food: 'Pizza'
		},

		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		},


		url: 'http://jl46.x10host.com/?json=1',

    parse: function(response) {
      var postArray = response["posts"];

      for (var i = 0; i< postArray.length-1; i++){

          //get wp post contents
          var newName = postArray[i]["title"];
          console.log(newName);
          var newFood = postArray[i]["content"];
          console.log(newOrder);

          //create model instance and store to collection
          var newOrder = new Todo({name: newName, food: newFood});
          console.log(newOrder.get("name"));

          app.todos.add(newOrder);  //hardcoded collection to store
      }
    }
	});

	app.model = new app.Todo();
})();
