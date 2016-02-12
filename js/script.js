'use strict';

var todo = {} || '';
var todoTasks = [];
var completeTasks = [];
var pageTitle, todoC, complC, taskInput, taskSubmit, newTask, taskText, storedTodo, storedComplete;

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
		todo.handleCompletion();
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
					storedTodo = JSON.parse(localStorage["todoTasks"]);

					for(var i = 0; i < storedTodo.length; ) {
						target.find("ul").append("<li>"+storedTodo[i]+"</li>");
						i++;
					}
				todo.handleCompletion();
				break;

			case "completed":
					storedComplete = JSON.parse(localStorage["completeTasks"]);

					for(var a = 0; a < storedComplete.length; ) {
						target.find("ul").append("<li>"+storedComplete[a]+"</li>");
						a++;
					}
				break;
		}

	},

	handleDataInput: function() {
		taskSubmit.on("click", function(e) {
			e.preventDefault();

			newTask = taskInput.val();
			taskInput.val("");

			if(!localStorage["todoTasks"]) {
				localStorage.setItem("todoTasks", JSON.stringify(todoTasks));
			}

			todoTasks = JSON.parse(localStorage["todoTasks"]);
			todoTasks.push(newTask);

			localStorage["todoTasks"] = JSON.stringify(todoTasks);

			todo.loadData(todoC);
		});
	},

	handleCompletion: function() {
		todoC.find("ul li").on("click", function() {

			taskText = $(this).text();

			var complConfirm = confirm("Do you want to set \""+taskText+"\" task as completed?");

			if( complConfirm ) {
				//Remove selected task
				todoTasks = JSON.parse(localStorage["todoTasks"]);
				for ( var i = 0; i < todoTasks.length; i++ ) {
					if ( todoTasks[i] === taskText ) {
						todoTasks.splice(i,1);
					}
				}
				localStorage["todoTasks"] = JSON.stringify(todoTasks);

				//Add it to completed list
				if(!localStorage["completeTasks"]) {
					localStorage.setItem("completeTasks", JSON.stringify(completeTasks));
				}

				completeTasks = JSON.parse(localStorage["completeTasks"]);
				completeTasks.push(taskText);
				localStorage["completeTasks"] = JSON.stringify(completeTasks);

				todo.loadData(todoC);
				todo.loadData(complC);
			}
		});
	}


};

$(function() {
	todo.init();
});