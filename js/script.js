'use strict';

var todo = {} || '';
var pageTitle, todoC, complC, taskInput, taskSubmit, newTask;

todo = {

	init: function() {
		pageTitle  = $(".title");
		todoC      = $(".todo-container");
		complC     = $(".complete-container");
		taskInput  = $(".task-input");
		taskSubmit = $(".task-submit");

		todo.loadDash();
		todo.switcher();
		todo.handleDataInput();
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
		var targetAttr = target.data("place");

		switch(targetAttr) {
			case "todo":
				$.ajax({
					url: "../json/tasks.json",
					type: "GET",
					dataType: "JSON",
					cache: false,
					success: function(data) {
						$(data.todo).each( function(index, value) {
							target.find("ul").append("<li>"+value.task+"</li>");
						});
					}
				});
				break;

			case "completed":
				$.ajax({
					url: "../json/tasks.json",
					type: "GET",
					dataType: "JSON",
					cache: false,
					success: function(data) {
						$(data.completed).each( function(index, value) {
							target.find("ul").append("<li>"+value.task+"</li>");
						});
					}
				});
				break;
		}

	},

	handleDataInput: function() {
		taskSubmit.on("click", function(e) {
			e.preventDefault();
			newTask = taskInput.val();
			taskInput.val("");

			$.ajax({
				type : "POST",
				url : "../json/addtask.php",
				dataType : 'JSON',
				data : {
					json : newTask
				}
			});
		})
	}


};

$(function() {
	todo.init();
});