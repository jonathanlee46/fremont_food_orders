var app = app || {};

(function () {
	'use strict';

	var Todos = Backbone.Collection.extend({

		//reference
		model: app.Todo,

		//save all items to local storage
		localStorage: new Backbone.LocalStorage('todos-backbone'),

		//filter list for ordered items
		completed: function () {
			return this.where({completed: true});
		},

		//filter list for unordered items
		remaining: function () {
			return this.where({completed: false});
		},

		// We keep the Todos in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {
			return this.length ? this.last().get('order') + 1 : 1;
		},

		//order of insertion
		comparator: 'order'
		
	});

	app.todos = new Todos();
})();
