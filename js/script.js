'use strict';

var todo = {} || '';
var pageTitle, todoC, complC, taskInput, taskSubmit;

todo = {

	init: function() {
		pageTitle  = $(".title");
		todoC      = $(".todo-container");
		complC     = $(".complete-container");
		taskInput  = $(".task-input");
		taskSubmit = $(".task-submit");

		todo.loadDash();
		todo.switcher();
	},

	switcher: function() {

		$(".page-tabs button").on("click", function(e) {
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

	hideAll: function() {
		todoC.hide();
		todoC.removeClass("active");

		complC.hide();
		complC.removeClass("active");
	},

	loadDash: function() {
		pageTitle.html("Dashboard");
		todo.hideAll();
		//TODO: remove after styling
		todoC.show();
		complC.show();

		//For styling
		todoC.addClass("active");
		complC.addClass("active");

		todo.loadData(todoC);
		todo.loadData(complC);
	},

	loadTodo: function() {
		pageTitle.html("Todo");
		todo.hideAll();
		//TODO: remove after styling
		todoC.show();

		//For styling
		todoC.addClass("active");

		todo.loadData(todoC);
	},

	loadCompleted: function() {
		pageTitle.html("Completed");
		todo.hideAll();
		//TODO: remove after styling
		complC.show();

		//For styling
		complC.addClass("active");

		todo.loadData(complC);
	},

	loadData: function(target) {
		target.find("ul").html("");

		$.getJSON(".");
	}


};

$(function() {
	todo.init();
});