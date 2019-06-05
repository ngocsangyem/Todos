(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var todo_service_1 = require("./service/todo.service");

var TodoList =
/** @class */
function () {
  function TodoList(todos) {
    this.todoService = new todo_service_1.TodoService(todos);
  }

  TodoList.prototype.todoAddTask = function (input) {
    this.todoService.addTask(input);
    this.todoRenderTask();
  };

  TodoList.prototype.todoRenderTask = function () {
    var todos = this.todoService.getAllTask();
    return this.todoService.render(todos);
  };

  TodoList.prototype.todoInit = function () {
    var _this = this;

    var todoInput = document.getElementById('todoInput');
    todoInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        _this.todoAddTask(todoInput.value);
      }
    });
  };

  return TodoList;
}();

var initApp = new TodoList([]);
initApp.todoInit();

},{"./service/todo.service":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var id = 0;
var state = false;

var TodoService =
/** @class */
function () {
  function TodoService(todos) {
    this.todos = [];
    this.todos = todos;
  }

  TodoService.prototype.generateId = function () {
    return id += 1;
  };

  TodoService.prototype.renderTodo = function (task) {
    return "\n\t\t\t<li class=\"td__body-task" + (task.state == true ? ' td__body-task--complete' : '') + "\" data-id=\"" + task.id + "\" data-state=\"" + (task.state == true ? 'complete' : 'active') + "\">\n\t\t\t\t<input class=\"td__body-task--toggle\" type=\"checkbox\" name=\"\"><span>" + task.name + "</span>\n\t\t\t\t<button class=\"td__body-task--destroy\">\n\t\t\t\t\t<i class=\"mdi mdi-window-close\"></i>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t";
  };

  TodoService.prototype.render = function (tasks) {
    var wrapper = document.getElementById('bodyTasks');

    for (var index = 0; index < tasks.length; index++) {
      var element = tasks[index];
      wrapper.insertAdjacentHTML('beforeend', this.renderTodo(element));
    }
  };

  TodoService.prototype.addTask = function (todoName) {
    var todo = {
      id: this.generateId(),
      name: todoName,
      state: false
    };
    this.todos.push(todo);
    return todo;
  };

  TodoService.prototype.getAllTask = function () {
    return this.todos;
  };

  return TodoService;
}();

exports.TodoService = TodoService;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwL3R5cGVzY3JpcHQvYXBwLnRzIiwic3JjL2FwcC90eXBlc2NyaXB0L3NlcnZpY2UvdG9kby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDRUEsSUFBQSxjQUFBLEdBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUE7O0FBRUEsSUFBQSxRQUFBO0FBQUE7QUFBQSxZQUFBO0FBSUMsV0FBQSxRQUFBLENBQVksS0FBWixFQUF5QjtBQUN4QixTQUFLLFdBQUwsR0FBbUIsSUFBSSxjQUFBLENBQUEsV0FBSixDQUFnQixLQUFoQixDQUFuQjtBQUNBOztBQUVELEVBQUEsUUFBQSxDQUFBLFNBQUEsQ0FBQSxXQUFBLEdBQUEsVUFBWSxLQUFaLEVBQXlCO0FBQ3hCLFNBQUssV0FBTCxDQUFpQixPQUFqQixDQUF5QixLQUF6QjtBQUNBLFNBQUssY0FBTDtBQUNBLEdBSEQ7O0FBS0EsRUFBQSxRQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsR0FBQSxZQUFBO0FBQ0MsUUFBSSxLQUFLLEdBQUcsS0FBSyxXQUFMLENBQWlCLFVBQWpCLEVBQVo7QUFDQSxXQUFPLEtBQUssV0FBTCxDQUFpQixNQUFqQixDQUF3QixLQUF4QixDQUFQO0FBQ0EsR0FIRDs7QUFJQSxFQUFBLFFBQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxHQUFBLFlBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBOztBQUNDLFFBQUksU0FBUyxHQUFxQixRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUFsQztBQUVBLElBQUEsU0FBUyxDQUFDLGdCQUFWLENBQTJCLFVBQTNCLEVBQXVDLFVBQUEsQ0FBQSxFQUFDO0FBQ3ZDLFVBQUksQ0FBQyxDQUFDLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3RCLFFBQUEsS0FBSSxDQUFDLFdBQUwsQ0FBaUIsU0FBUyxDQUFDLEtBQTNCO0FBQ0E7QUFDRCxLQUpEO0FBS0EsR0FSRDs7QUFTRCxTQUFBLFFBQUE7QUFBQyxDQTFCRCxFQUFBOztBQTRCQSxJQUFJLE9BQU8sR0FBRyxJQUFJLFFBQUosQ0FBYSxFQUFiLENBQWQ7QUFFQSxPQUFPLENBQUMsUUFBUjs7Ozs7Ozs7QUM5QkEsSUFBSSxFQUFFLEdBQUcsQ0FBVDtBQUVBLElBQUksS0FBSyxHQUFHLEtBQVo7O0FBQ0EsSUFBQSxXQUFBO0FBQUE7QUFBQSxZQUFBO0FBR0MsV0FBQSxXQUFBLENBQVksS0FBWixFQUF5QjtBQUZ6QixTQUFBLEtBQUEsR0FBZ0IsRUFBaEI7QUFHQyxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0E7O0FBRU8sRUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLFVBQUEsR0FBUixZQUFBO0FBQ0MsV0FBUSxFQUFFLElBQUksQ0FBZDtBQUNBLEdBRk87O0FBSUEsRUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLFVBQUEsR0FBUixVQUFvQixJQUFwQixFQUFvRTtBQUNuRSxXQUFPLHVDQUNvQixJQUFJLENBQUMsS0FBTCxJQUFjLElBQWQsR0FBcUIsMEJBQXJCLEdBQWtELEVBRHRFLElBQ3dFLGVBRHhFLEdBQ3NGLElBQUksQ0FBQyxFQUQzRixHQUM2RixrQkFEN0YsSUFDOEcsSUFBSSxDQUFDLEtBQUwsSUFBYyxJQUFkLEdBQXFCLFVBQXJCLEdBQWtDLFFBRGhKLElBQ3dKLHdGQUR4SixHQUVnRSxJQUFJLENBQUMsSUFGckUsR0FFeUUsb0pBRmhGO0FBUUEsR0FUTzs7QUFXUixFQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxHQUFBLFVBQU8sS0FBUCxFQUFvQjtBQUNuQixRQUFJLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBM0I7O0FBRUEsU0FBSyxJQUFJLEtBQUssR0FBRyxDQUFqQixFQUFvQixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQWxDLEVBQTBDLEtBQUssRUFBL0MsRUFBbUQ7QUFDbEQsVUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUQsQ0FBbkI7QUFDQSxNQUFBLE9BQU8sQ0FBQyxrQkFBUixDQUEyQixXQUEzQixFQUF3QyxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBeEM7QUFDQTtBQUNELEdBUEQ7O0FBUUEsRUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsR0FBQSxVQUFRLFFBQVIsRUFBd0I7QUFDdkIsUUFBSSxJQUFJLEdBQVM7QUFDaEIsTUFBQSxFQUFFLEVBQUUsS0FBSyxVQUFMLEVBRFk7QUFFaEIsTUFBQSxJQUFJLEVBQUUsUUFGVTtBQUdoQixNQUFBLEtBQUssRUFBRTtBQUhTLEtBQWpCO0FBTUEsU0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFoQjtBQUNBLFdBQU8sSUFBUDtBQUNBLEdBVEQ7O0FBV0EsRUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLFVBQUEsR0FBQSxZQUFBO0FBQ0MsV0FBTyxLQUFLLEtBQVo7QUFDQSxHQUZEOztBQUlELFNBQUEsV0FBQTtBQUFDLENBN0NELEVBQUE7O0FBQWEsT0FBQSxDQUFBLFdBQUEsR0FBQSxXQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vbW9kZWwvdG9kby5tb2RlbCc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL2ludGVyZmFjZS90b2RvLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gJy4vc2VydmljZS90b2RvLnNlcnZpY2UnO1xuXG5jbGFzcyBUb2RvTGlzdCB7XG5cblx0cHJpdmF0ZSB0b2RvU2VydmljZTogVG9kb1NlcnZpY2U7XG5cblx0Y29uc3RydWN0b3IodG9kb3M6IFRvZG9bXSkge1xuXHRcdHRoaXMudG9kb1NlcnZpY2UgPSBuZXcgVG9kb1NlcnZpY2UodG9kb3MpO1xuXHR9XG5cblx0dG9kb0FkZFRhc2soaW5wdXQ6IHN0cmluZyl7XG5cdFx0dGhpcy50b2RvU2VydmljZS5hZGRUYXNrKGlucHV0KTtcblx0XHR0aGlzLnRvZG9SZW5kZXJUYXNrKCk7XG5cdH1cblxuXHR0b2RvUmVuZGVyVGFzaygpe1xuXHRcdGxldCB0b2RvcyA9IHRoaXMudG9kb1NlcnZpY2UuZ2V0QWxsVGFzaygpO1xuXHRcdHJldHVybiB0aGlzLnRvZG9TZXJ2aWNlLnJlbmRlcih0b2Rvcyk7XG5cdH1cblx0dG9kb0luaXQgKCkge1xuXHRcdGxldCB0b2RvSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0lucHV0Jyk7XG5cblx0XHR0b2RvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcblx0XHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0XHR0aGlzLnRvZG9BZGRUYXNrKHRvZG9JbnB1dC52YWx1ZSlcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5sZXQgaW5pdEFwcCA9IG5ldyBUb2RvTGlzdChbXSk7XG5cbmluaXRBcHAudG9kb0luaXQoKTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbC90b2RvLm1vZGVsJztcbmltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZS90b2RvLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUb2RvU2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZS90b2Rvc2VydmljZS5pbnRlcmZhY2UnO1xuXG5sZXQgaWQgPSAwO1xuXG5sZXQgc3RhdGUgPSBmYWxzZTtcbmV4cG9ydCBjbGFzcyBUb2RvU2VydmljZSB7XG5cdHRvZG9zOiBUb2RvW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcih0b2RvczogVG9kb1tdKSB7XG5cdFx0dGhpcy50b2RvcyA9IHRvZG9zO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZUlkKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIChpZCArPSAxKTtcblx0fVxuXG5cdHByaXZhdGUgcmVuZGVyVG9kbyAodGFzazoge2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgc3RhdGU6IGJvb2xlYW59KXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGxpIGNsYXNzPVwidGRfX2JvZHktdGFzayR7dGFzay5zdGF0ZSA9PSB0cnVlID8gJyB0ZF9fYm9keS10YXNrLS1jb21wbGV0ZScgOiAnJ31cIiBkYXRhLWlkPVwiJHt0YXNrLmlkfVwiIGRhdGEtc3RhdGU9XCIke3Rhc2suc3RhdGUgPT0gdHJ1ZSA/ICdjb21wbGV0ZScgOiAnYWN0aXZlJ31cIj5cblx0XHRcdFx0PGlucHV0IGNsYXNzPVwidGRfX2JvZHktdGFzay0tdG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiPjxzcGFuPiR7dGFzay5uYW1lfTwvc3Bhbj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRkX19ib2R5LXRhc2stLWRlc3Ryb3lcIj5cblx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kaSBtZGktd2luZG93LWNsb3NlXCI+PC9pPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvbGk+XG5cdFx0YFxuXHR9XG5cblx0cmVuZGVyKHRhc2tzOiBUb2RvW10pIHtcblx0XHRsZXQgd3JhcHBlciA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keVRhc2tzJyk7XG5cblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGFza3MubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRsZXQgZWxlbWVudCA9IHRhc2tzW2luZGV4XTtcblx0XHRcdHdyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLnJlbmRlclRvZG8oZWxlbWVudCkpO1xuXHRcdH1cblx0fVxuXHRhZGRUYXNrKHRvZG9OYW1lOiBzdHJpbmcpe1xuXHRcdGxldCB0b2RvOiBUb2RvID0ge1xuXHRcdFx0aWQ6IHRoaXMuZ2VuZXJhdGVJZCgpLFxuXHRcdFx0bmFtZTogdG9kb05hbWUsXG5cdFx0XHRzdGF0ZTogZmFsc2Vcblx0XHR9XG5cblx0XHR0aGlzLnRvZG9zLnB1c2godG9kbylcblx0XHRyZXR1cm4gdG9kbztcblx0fVxuXG5cdGdldEFsbFRhc2soKTogVG9kb1tdIHtcblx0XHRyZXR1cm4gdGhpcy50b2Rvcztcblx0fVxuXHRcbn1cbiJdfQ==
