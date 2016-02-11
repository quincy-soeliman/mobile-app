'use strict';

var todo = {} || '';

todo = {

	init: function() {
		var pageTitle = $(".title");
		var listTitle = $(".curr-list-title");

		todo.loadDash();
		todo.switcher();
	},

	switcher: function() {

		$(".buttons button").on("click", function(e) {
			e.preventDefault();
			var place = $(this).attr("place");

			switch(place) {
				case "dashboard":
					todo.loadDash();
					break;
				case "todo":
					todo.loadTodo();
					break;
				case "completed":
					todo.loadCompleted();
					break;
			}
		});

	},

	loadDash: function() {
		$("");
	},

	loadTodo: function() {

	},

	loadCompleted: function() {

	}


};

$(document).ready( function() {
	todo.init();
});