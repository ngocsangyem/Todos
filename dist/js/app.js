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

  TodoList.prototype.todoToggleState = function () {
    this.todoService.toggleState(); // this.renderTodos();
  };

  TodoList.prototype.todoCountTask = function (count) {
    return this.todoService.countTask(count);
  };

  TodoList.prototype.todoAddTask = function (input) {
    this.todoService.render(input);
  };

  TodoList.prototype.todoInit = function () {
    var _this = this;

    var todoInput = document.getElementById('todoInput');
    var todoFooter = document.querySelector('.td__footer');
    var todoCount = document.querySelector('.td__header-count');
    var todoToggle = document.getElementsByClassName('td__body-task');
    todoInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        _this.todoAddTask(todoInput.value);

        todoInput.value = '';
        todoFooter.style.display = 'flex';
        todoCount.innerHTML = _this.todoCountTask(todoCount);
      }
    });
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('td__body-task')) {
        console.log(123);

        _this.todoToggleState();
      }
    }, false);
  };

  return TodoList;
}();

var todoApp = new TodoList([]);
todoApp.todoInit();

},{"./service/todo.service":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TodoState;

(function (TodoState) {
  TodoState[TodoState["Active"] = 0] = "Active";
  TodoState[TodoState["Complete"] = 1] = "Complete";
})(TodoState = exports.TodoState || (exports.TodoState = {}));

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var todo_interface_1 = require("../interface/todo.interface");

var state = false;

var TodoService =
/** @class */
function () {
  function TodoService(todos) {
    // state: boolean = false;
    this.id = 0;
    this.todos = [];
  }

  TodoService.prototype.generateId = function () {
    return this.id += 1;
  };

  TodoService.prototype.addTask = function (task) {
    var todo = {
      id: this.generateId(),
      name: task,
      state: todo_interface_1.TodoState.Active
    };
    this.todos.push(todo);
    return todo;
  };

  TodoService.prototype.renderTodo = function (todoItem, container) {
    var html, newHtml;
    html = "<li class=\"td__body-task" + (todoItem.state === 1 ? ' td__body-task--complete' : '') + "\" data-id=\"" + todoItem.id + "\" data-state=\"" + (todoItem.state === 1 ? 'complete' : 'active') + "\">\n\t\t\t\t\t<input class=\"td__body-task--toggle\" type=\"checkbox\">\n\t\t\t\t\t<span>" + todoItem.name + "</span>\n\t\t\t\t\t<button class=\"td__body-task--destroy\"><i class=\"mdi mdi-window-close\"></i></button>\n\t\t\t\t</li>";
    container.insertAdjacentHTML("beforeend", html);
  };

  TodoService.prototype.clearCompleteTask = function () {
    this.todos = this.todos.filter(function (todo) {
      return todo.state === todo_interface_1.TodoState.Complete;
    });
  };

  TodoService.prototype.render = function (input) {
    var newItem;
    var container = document.getElementById('bodyTasks');
    newItem = this.addTask(input);
    this.renderTodo(newItem, container);
  };

  TodoService.prototype.allTask = function () {
    return this.todos.slice();
  };

  TodoService.prototype.activeTask = function () {
    return this.todos = this.todos.filter(function (todo) {
      return todo.state === todo_interface_1.TodoState.Active;
    });
  };

  TodoService.prototype.completeTask = function () {
    return this.todos = this.todos.filter(function (todo) {
      return todo.state === todo_interface_1.TodoState.Complete;
    });
  };

  TodoService.prototype.countTask = function (count) {
    if (this.todos.length > 0) {
      count.style.display = 'block';
    } else {
      count.style.display = 'none';
    }

    return String(this.todos.length);
  };

  TodoService.prototype.toggleState = function () {};

  TodoService.prototype.destroyTask = function () {};

  return TodoService;
}();

exports.TodoService = TodoService;

},{"../interface/todo.interface":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwL3R5cGVzY3JpcHQvYXBwLnRzIiwic3JjL2FwcC90eXBlc2NyaXB0L2ludGVyZmFjZS90b2RvLmludGVyZmFjZS50cyIsInNyYy9hcHAvdHlwZXNjcmlwdC9zZXJ2aWNlL3RvZG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0VBLElBQUEsY0FBQSxHQUFBLE9BQUEsQ0FBQSx3QkFBQSxDQUFBOztBQUVBLElBQUEsUUFBQTtBQUFBO0FBQUEsWUFBQTtBQUtDLFdBQUEsUUFBQSxDQUFZLEtBQVosRUFBeUI7QUFDeEIsU0FBSyxXQUFMLEdBQW1CLElBQUksY0FBQSxDQUFBLFdBQUosQ0FBZ0IsS0FBaEIsQ0FBbkI7QUFDQTs7QUFFRCxFQUFBLFFBQUEsQ0FBQSxTQUFBLENBQUEsZUFBQSxHQUFBLFlBQUE7QUFDQyxTQUFLLFdBQUwsQ0FBaUIsV0FBakIsR0FERCxDQUVDO0FBQ0EsR0FIRDs7QUFLQSxFQUFBLFFBQUEsQ0FBQSxTQUFBLENBQUEsYUFBQSxHQUFBLFVBQWMsS0FBZCxFQUFnQztBQUMvQixXQUFPLEtBQUssV0FBTCxDQUFpQixTQUFqQixDQUEyQixLQUEzQixDQUFQO0FBQ0EsR0FGRDs7QUFJQSxFQUFBLFFBQUEsQ0FBQSxTQUFBLENBQUEsV0FBQSxHQUFBLFVBQVksS0FBWixFQUF5QjtBQUN4QixTQUFLLFdBQUwsQ0FBaUIsTUFBakIsQ0FBd0IsS0FBeEI7QUFDQSxHQUZEOztBQUlBLEVBQUEsUUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLEdBQUEsWUFBQTtBQUFBLFFBQUEsS0FBQSxHQUFBLElBQUE7O0FBQ0MsUUFBSSxTQUFTLEdBQXFCLFFBQVEsQ0FBQyxjQUFULENBQXdCLFdBQXhCLENBQWxDO0FBQ0EsUUFBSSxVQUFVLEdBQWdCLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBQTlCO0FBQ0EsUUFBSSxTQUFT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QUssS0FBTCxDQUFXLE1BQVgsQ0FDcEIsVUFBQSxJQUFBLEVBQUk7QUFBSSxhQUFBLElBQUksQ0FBQyxLQUFMLEtBQWUsZ0JBQUEsQ0FBQSxTQUFBLENBQWYsUUFBQTtBQUFpQyxLQURyQixDQUFyQjtBQUdBLEdBSkQ7O0FBTUEsRUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLFNBQUEsR0FBQSxVQUFVLEtBQVYsRUFBNEI7QUFDM0IsUUFBSSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQzFCLE1BQUEsS0FBSyxDQUFDLEtBQU4sQ0FBWSxPQUFaLEdBQXNCLE9BQXRCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sTUFBQSxLQUFLLENBQUMsS0FBTixDQUFZLE9BQVosR0FBc0IsTUFBdEI7QUFDQTs7QUFDRCxXQUFPLE1BQU0sQ0FBQyxLQUFLLEtBQUwsQ0FBVyxNQUFaLENBQWI7QUFDQSxHQVBEOztBQVNBLEVBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxXQUFBLEdBQUEsWUFBQSxDQUVDLENBRkQ7O0FBSUEsRUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLFdBQUEsR0FBQSxZQUFBLENBQWdCLENBQWhCOztBQUNELFNBQUEsV0FBQTtBQUFDLENBMUVELEVBQUE7O0FBQWEsT0FBQSxDQUFBLFdBQUEsR0FBQSxXQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vbW9kZWwvdG9kby5tb2RlbCc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL2ludGVyZmFjZS90b2RvLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gJy4vc2VydmljZS90b2RvLnNlcnZpY2UnO1xuXG5jbGFzcyBUb2RvTGlzdCB7XG5cdFxuXHRwcml2YXRlIHRvZG9TZXJ2aWNlOiBUb2RvU2VydmljZTtcblxuXHRcblx0Y29uc3RydWN0b3IodG9kb3M6IFRvZG9bXSkge1xuXHRcdHRoaXMudG9kb1NlcnZpY2UgPSBuZXcgVG9kb1NlcnZpY2UodG9kb3MpO1xuXHR9XG5cblx0dG9kb1RvZ2dsZVN0YXRlKCl7XG5cdFx0dGhpcy50b2RvU2VydmljZS50b2dnbGVTdGF0ZSgpO1xuXHRcdC8vIHRoaXMucmVuZGVyVG9kb3MoKTtcblx0fVxuXG5cdHRvZG9Db3VudFRhc2soY291bnQ6IEhUTUxFbGVtZW50KTogc3RyaW5ne1xuXHRcdHJldHVybiB0aGlzLnRvZG9TZXJ2aWNlLmNvdW50VGFzayhjb3VudCk7XG5cdH1cblxuXHR0b2RvQWRkVGFzayhpbnB1dDogc3RyaW5nKXtcblx0XHR0aGlzLnRvZG9TZXJ2aWNlLnJlbmRlcihpbnB1dCk7XG5cdH1cblxuXHR0b2RvSW5pdCgpe1xuXHRcdGxldCB0b2RvSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0lucHV0Jyk7XG5cdFx0bGV0IHRvZG9Gb290ZXIgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRkX19mb290ZXInKTtcblx0XHRsZXQgdG9kb0NvdW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZF9faGVhZGVyLWNvdW50Jyk7XG5cdFx0bGV0IHRvZG9Ub2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZF9fYm9keS10YXNrJyk7XG5cblx0XHR0b2RvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcblx0XHRcdFx0dGhpcy50b2RvQWRkVGFzayh0b2RvSW5wdXQudmFsdWUpO1xuXHRcdFx0XHR0b2RvSW5wdXQudmFsdWUgPSAnJ1xuXHRcdFx0XHR0b2RvRm9vdGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cdFx0XHRcdHRvZG9Db3VudC5pbm5lckhUTUwgPSB0aGlzLnRvZG9Db3VudFRhc2sodG9kb0NvdW50KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0aWYgKCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ3RkX19ib2R5LXRhc2snKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygxMjMpO1xuXHRcdFx0XHR0aGlzLnRvZG9Ub2dnbGVTdGF0ZSgpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKVxuXHR9XG59XG5cbmxldCB0b2RvQXBwID0gbmV3IFRvZG9MaXN0KFtdKVxuXG50b2RvQXBwLnRvZG9Jbml0KCk7XG5cbiIsImV4cG9ydCBpbnRlcmZhY2UgVG9kb0ludGVyZmFjZSB7XG5cdGlkOiBudW1iZXI7XG5cdG5hbWU6IHN0cmluZztcblx0c3RhdGU6IFRvZG9TdGF0ZTtcbn1cblxuXG5leHBvcnQgZW51bSBUb2RvU3RhdGUge1xuXHRBY3RpdmUgPSAwLFxuXHRDb21wbGV0ZSA9IDFcbn1cbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbC90b2RvLm1vZGVsJztcbmltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZS90b2RvLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUb2RvU2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZS90b2Rvc2VydmljZS5pbnRlcmZhY2UnO1xuXG5cbmxldCBzdGF0ZSA9IGZhbHNlO1xuZXhwb3J0IGNsYXNzIFRvZG9TZXJ2aWNlIGltcGxlbWVudHMgVG9kb1NlcnZpY2VJbnRlcmZhY2Uge1xuXHQvLyBzdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIGlkOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHRvZG9zOiBUb2RvW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcih0b2RvczogVG9kb1tdKSB7XG5cdH1cblxuXHRwcml2YXRlIGdlbmVyYXRlSWQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gKHRoaXMuaWQgKz0gMSk7XG5cdH1cblx0cHJpdmF0ZSBhZGRUYXNrKHRhc2s6IHN0cmluZyk6IFRvZG8ge1xuXHRcdGxldCB0b2RvOiBUb2RvID0ge1xuXHRcdFx0aWQ6IHRoaXMuZ2VuZXJhdGVJZCgpLFxuXHRcdFx0bmFtZTogdGFzayxcblx0XHRcdHN0YXRlOiBUb2RvU3RhdGUuQWN0aXZlLFxuXHRcdH07XG5cdFx0dGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuXHRcdFxuXHRcdHJldHVybiB0b2RvO1xuXHR9XG5cblx0cHJpdmF0ZSByZW5kZXJUb2RvKHRvZG9JdGVtOiB7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBzdGF0ZTogVG9kb1N0YXRlfSwgY29udGFpbmVyOiAgSFRNTEVsZW1lbnQpOiB2b2lke1xuXHRcdGxldCBodG1sLCBuZXdIdG1sO1xuXHRcdGh0bWwgPSAgYDxsaSBjbGFzcz1cInRkX19ib2R5LXRhc2ske3RvZG9JdGVtLnN0YXRlID09PSAxID8gJyB0ZF9fYm9keS10YXNrLS1jb21wbGV0ZScgOiAnJyB9XCIgZGF0YS1pZD1cIiR7dG9kb0l0ZW0uaWR9XCIgZGF0YS1zdGF0ZT1cIiR7dG9kb0l0ZW0uc3RhdGUgPT09IDEgPyAnY29tcGxldGUnIDogJ2FjdGl2ZSd9XCI+XG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwidGRfX2JvZHktdGFzay0tdG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCI+XG5cdFx0XHRcdFx0PHNwYW4+JHt0b2RvSXRlbS5uYW1lfTwvc3Bhbj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidGRfX2JvZHktdGFzay0tZGVzdHJveVwiPjxpIGNsYXNzPVwibWRpIG1kaS13aW5kb3ctY2xvc2VcIj48L2k+PC9idXR0b24+XG5cdFx0XHRcdDwvbGk+YFxuXHRcdGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbClcblx0fVxuXG5cdGNsZWFyQ29tcGxldGVUYXNrKCkge1xuXHRcdHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uc3RhdGUgPT09IFRvZG9TdGF0ZS5Db21wbGV0ZSk7XG5cdH1cblxuXHRyZW5kZXIoaW5wdXQ6IHN0cmluZyk6IHZvaWR7XG5cdFx0bGV0IG5ld0l0ZW07XG5cdFx0bGV0IGNvbnRhaW5lciA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keVRhc2tzJyk7XG5cdFx0bmV3SXRlbSA9IHRoaXMuYWRkVGFzayhpbnB1dCk7XG5cblx0XHR0aGlzLnJlbmRlclRvZG8obmV3SXRlbSwgY29udGFpbmVyKTtcblx0fVxuXG5cdGFsbFRhc2soKSB7XG5cdFx0cmV0dXJuIHRoaXMudG9kb3Muc2xpY2UoKTtcblx0fVxuXG5cdGFjdGl2ZVRhc2soKSB7XG5cdFx0cmV0dXJuICh0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoXG5cdFx0XHR0b2RvID0+IHRvZG8uc3RhdGUgPT09IFRvZG9TdGF0ZS5BY3RpdmVcblx0XHQpKTtcblx0fVxuXG5cdGNvbXBsZXRlVGFzaygpIHtcblx0XHRyZXR1cm4gKHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcihcblx0XHRcdHRvZG8gPT4gdG9kby5zdGF0ZSA9PT0gVG9kb1N0YXRlLkNvbXBsZXRlXG5cdFx0KSk7XG5cdH1cblxuXHRjb3VudFRhc2soY291bnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy50b2Rvcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb3VudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb3VudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cdFx0fVxuXHRcdHJldHVybiBTdHJpbmcodGhpcy50b2Rvcy5sZW5ndGgpO1xuXHR9XG5cblx0dG9nZ2xlU3RhdGUoKXtcblx0XHRcblx0fVxuXG5cdGRlc3Ryb3lUYXNrKCkge31cbn1cbiJdfQ==
