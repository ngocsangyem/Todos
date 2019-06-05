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
var state = false;

var TodoService =
/** @class */
function () {
  function TodoService(todos) {
    this.id = 0;
    this.todos = [];
    this.todos = todos;
  }

  TodoService.prototype.generateId = function () {
    return this.id += 1;
  };

  TodoService.prototype.toggleState = function (state) {
    state = !state;
    console.log(state);
    return state;
  };

  TodoService.prototype.renderTodo = function (task) {
    var _this = this;

    var html, wrapper;
    wrapper = document.getElementById('bodyTasks');
    html = "\n\t\t\t<li class=\"td__body-task" + (task.state == true ? ' td__body-task--complete' : '') + "\" data-id=\"" + task.id + "\" data-state=\"" + (task.state == true ? 'complete' : 'active') + "\">\n\t\t\t\t<input class=\"td__body-task--toggle\" type=\"checkbox\" name=\"\"><span>" + task.name + "</span>\n\t\t\t\t<button class=\"td__body-task--destroy\">\n\t\t\t\t\t<i class=\"mdi mdi-window-close\"></i>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t";
    wrapper.insertAdjacentHTML('beforeend', html);
    var finId = document.querySelector("[data-id=\"" + task.id + "\"]");

    if (finId) {
      finId.addEventListener('click', function () {
        console.log("State before: " + task.state);

        _this.toggleState(task.state);

        console.log("State after: " + task.state);
      });
    }
  };

  TodoService.prototype.render = function (tasks) {
    for (var index = 0; index < tasks.length; index++) {
      var element = tasks[index];

      if (element.id === this.id) {
        this.renderTodo(element);
      }
    }
  };

  TodoService.prototype.addTask = function (todoName) {
    var todo = {
      id: this.generateId(),
      name: todoName,
      state: false
    };
    console.log(this.todos);
    this.todos.push(todo);
    return todo;
  };

  TodoService.prototype.getAllTask = function () {
    var todoFooter = document.querySelector('.td__footer');

    if (this.todos.length > 0) {
      todoFooter.style.display = 'flex';
    } else {
      todoFooter.style.display = 'none';
    }

    return this.todos;
  };

  return TodoService;
}();

exports.TodoService = TodoService;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwL3R5cGVzY3JpcHQvYXBwLnRzIiwic3JjL2FwcC90eXBlc2NyaXB0L3NlcnZpY2UvdG9kby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDRUEsSUFBQSxjQUFBLEdBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUE7O0FBRUEsSUFBQSxRQUFBO0FBQUE7QUFBQSxZQUFBO0FBSUMsV0FBQSxRQUFBLENBQVksS0FBWixFQUF5QjtBQUN4QixTQUFLLFdBQUwsR0FBbUIsSUFBSSxjQUFBLENBQUEsV0FBSixDQUFnQixLQUFoQixDQUFuQjtBQUNBOztBQUVELEVBQUEsUUFBQSxDQUFBLFNBQUEsQ0FBQSxXQUFBLEdBQUEsVUFBWSxLQUFaLEVBQXlCO0FBQ3hCLFNBQUssV0FBTCxDQUFpQixPQUFqQixDQUF5QixLQUF6QjtBQUNBLFNBQUssY0FBTDtBQUNBLEdBSEQ7O0FBS0EsRUFBQSxRQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsR0FBQSxZQUFBO0FBQ0MsUUFBSSxLQUFLLEdBQUcsS0FBSyxXQUFMLENBQWlCLFVBQWpCLEVBQVo7QUFDQSxXQUFPLEtBQUssV0FBTCxDQUFpQixNQUFqQixDQUF3QixLQUF4QixDQUFQO0FBQ0EsR0FIRDs7QUFJQSxFQUFBLFFBQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxHQUFBLFlBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBOztBQUNDLFFBQUksU0FBUyxHQUFxQixRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUFsQztBQUVBLElBQUEsU0FBUyxDQUFDLGdCQUFWLENBQTJCLFVBQTNCLEVBQXVDLFVBQUEsQ0FBQSxFQUFDO0FBQ3ZDLFVBQUksQ0FBQyxDQUFDLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3RCLFFBQUEsS0FBSSxDQUFDLFdBQUwsQ0FBaUIsU0FBUyxDQUFDLEtBQTNCO0FBQ0E7QUFDRCxL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QUFFQSxTQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCO0FBQ0EsV0FBTyxJQUFQO0FBQ0EsR0FWRDs7QUFZQSxFQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsVUFBQSxHQUFBLFlBQUE7QUFDQyxRQUFJLFVBQVUsR0FBZ0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBOUI7O0FBQ0EsUUFBSSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQzFCLE1BQUEsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsT0FBakIsR0FBMkIsTUFBM0I7QUFDQSxLQUZELE1BRU87QUFDTixNQUFBLFVBQVUsQ0FBQyxLQUFYLENBQWlCLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0E7O0FBQ0QsV0FBTyxLQUFLLEtBQVo7QUFDQSxHQVJEOztBQVNELFNBQUEsV0FBQTtBQUFDLENBdkVELEVBQUE7O0FBQWEsT0FBQSxDQUFBLFdBQUEsR0FBQSxXQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vbW9kZWwvdG9kby5tb2RlbCc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL2ludGVyZmFjZS90b2RvLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gJy4vc2VydmljZS90b2RvLnNlcnZpY2UnO1xuXG5jbGFzcyBUb2RvTGlzdCB7XG5cblx0cHJpdmF0ZSB0b2RvU2VydmljZTogVG9kb1NlcnZpY2U7XG5cblx0Y29uc3RydWN0b3IodG9kb3M6IFRvZG9bXSkge1xuXHRcdHRoaXMudG9kb1NlcnZpY2UgPSBuZXcgVG9kb1NlcnZpY2UodG9kb3MpO1xuXHR9XG5cblx0dG9kb0FkZFRhc2soaW5wdXQ6IHN0cmluZyl7XG5cdFx0dGhpcy50b2RvU2VydmljZS5hZGRUYXNrKGlucHV0KTtcblx0XHR0aGlzLnRvZG9SZW5kZXJUYXNrKCk7XG5cdH1cblxuXHR0b2RvUmVuZGVyVGFzaygpe1xuXHRcdGxldCB0b2RvcyA9IHRoaXMudG9kb1NlcnZpY2UuZ2V0QWxsVGFzaygpO1xuXHRcdHJldHVybiB0aGlzLnRvZG9TZXJ2aWNlLnJlbmRlcih0b2Rvcyk7XG5cdH1cblx0dG9kb0luaXQgKCkge1xuXHRcdGxldCB0b2RvSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0lucHV0Jyk7XG5cblx0XHR0b2RvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcblx0XHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0XHR0aGlzLnRvZG9BZGRUYXNrKHRvZG9JbnB1dC52YWx1ZSlcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5sZXQgaW5pdEFwcCA9IG5ldyBUb2RvTGlzdChbXSk7XG5cbmluaXRBcHAudG9kb0luaXQoKTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbC90b2RvLm1vZGVsJztcbmltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZS90b2RvLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUb2RvU2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZS90b2Rvc2VydmljZS5pbnRlcmZhY2UnO1xuXG5cblxubGV0IHN0YXRlID0gZmFsc2U7XG5leHBvcnQgY2xhc3MgVG9kb1NlcnZpY2Uge1xuXHRwcml2YXRlIGlkOiBudW1iZXIgPSAwO1xuXHR0b2RvczogVG9kb1tdID0gW107XG5cblx0Y29uc3RydWN0b3IodG9kb3M6IFRvZG9bXSkge1xuXHRcdHRoaXMudG9kb3MgPSB0b2Rvcztcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVJZCgpOiBudW1iZXIge1xuXHRcdHJldHVybiAodGhpcy5pZCArPSAxKTtcblx0fVxuXG5cdHByaXZhdGUgdG9nZ2xlU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiBib29sZWFuIHtcblx0XHRzdGF0ZSA9ICFzdGF0ZTtcblx0XHRjb25zb2xlLmxvZyhzdGF0ZSk7XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG5cblx0cHJpdmF0ZSByZW5kZXJUb2RvICh0YXNrOiB7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBzdGF0ZTogYm9vbGVhbn0pe1xuXHRcdGxldCBodG1sLCB3cmFwcGVyO1xuXHRcdHdyYXBwZXIgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHlUYXNrcycpO1xuXHRcdGh0bWwgPSBgXG5cdFx0XHQ8bGkgY2xhc3M9XCJ0ZF9fYm9keS10YXNrJHt0YXNrLnN0YXRlID09IHRydWUgPyAnIHRkX19ib2R5LXRhc2stLWNvbXBsZXRlJyA6ICcnfVwiIGRhdGEtaWQ9XCIke3Rhc2suaWR9XCIgZGF0YS1zdGF0ZT1cIiR7dGFzay5zdGF0ZSA9PSB0cnVlID8gJ2NvbXBsZXRlJyA6ICdhY3RpdmUnfVwiPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJ0ZF9fYm9keS10YXNrLS10b2dnbGVcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiXCI+PHNwYW4+JHt0YXNrLm5hbWV9PC9zcGFuPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidGRfX2JvZHktdGFzay0tZGVzdHJveVwiPlxuXHRcdFx0XHRcdDxpIGNsYXNzPVwibWRpIG1kaS13aW5kb3ctY2xvc2VcIj48L2k+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9saT5cblx0XHRgXG5cdFx0d3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuXHRcdGxldCBmaW5JZCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7dGFzay5pZH1cIl1gKVxuXHRcdGlmIChmaW5JZCkge1xuXHRcdFx0ZmluSWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBTdGF0ZSBiZWZvcmU6ICR7dGFzay5zdGF0ZX1gKTtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMudG9nZ2xlU3RhdGUodGFzay5zdGF0ZSk7XG5cdFxuXHRcdFx0XHRjb25zb2xlLmxvZyhgU3RhdGUgYWZ0ZXI6ICR7dGFzay5zdGF0ZX1gKTtcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKHRhc2tzOiBUb2RvW10pIHtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGFza3MubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRsZXQgZWxlbWVudCA9IHRhc2tzW2luZGV4XTtcblx0XHRcdGlmIChlbGVtZW50LmlkID09PSB0aGlzLmlkKSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyVG9kbyhlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0YWRkVGFzayh0b2RvTmFtZTogc3RyaW5nKXtcblx0XHRsZXQgdG9kbzogVG9kbyA9IHtcblx0XHRcdGlkOiB0aGlzLmdlbmVyYXRlSWQoKSxcblx0XHRcdG5hbWU6IHRvZG9OYW1lLFxuXHRcdFx0c3RhdGU6IGZhbHNlXG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHRoaXMudG9kb3MpO1xuXHRcdFxuXHRcdHRoaXMudG9kb3MucHVzaCh0b2RvKVxuXHRcdHJldHVybiB0b2RvO1xuXHR9XG5cblx0Z2V0QWxsVGFzaygpOiBUb2RvW10ge1xuXHRcdGxldCB0b2RvRm9vdGVyID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZF9fZm9vdGVyJylcblx0XHRpZiAodGhpcy50b2Rvcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0b2RvRm9vdGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9kb0Zvb3Rlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnRvZG9zO1xuXHR9XG59XG4iXX0=
