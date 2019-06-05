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
  } // todoToggleState(todo: Todo){
  // 	this.todoService.toggleState(todo);
  // }


  TodoList.prototype.todoCountTask = function (countElement) {
    return this.todoService.countTask(countElement);
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
    }); // document.addEventListener('click', event => {
    // 	if ((<HTMLElement>event.target).classList.contains('td__body-task')) {
    // 		console.log(123);
    // 		this.todoToggleState();
    // 	}
    // }, false)
  };

  return TodoList;
}();

var todoApp = new TodoList([]);
todoApp.todoInit();

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
    // state: boolean = false;
    this.id = 0;
    this.todos = [];
  }

  TodoService.prototype.generateId = function (length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ';
    var ID = '';

    for (var i = 0; i < length; i += 1) {
      ID += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return ID;
  };

  TodoService.prototype.addTask = function (task) {
    var todo = {
      id: this.generateId(4),
      name: task,
      state: false
    };
    this.todos.push(todo);
    console.log(this.todos);
    return todo;
  };

  TodoService.prototype.renderTodo = function (todoItem) {
    var container = document.getElementById('bodyTasks');
    var html, newHtml, htmlDom;
    html = "<li class=\"td__body-task" + (todoItem.state === true ? ' td__body-task--complete' : '') + "\" data-id=\"" + todoItem.id + "\" data-state=\"" + (todoItem.state === true ? 'complete' : 'active') + "\">\n\t\t\t\t\t<input class=\"td__body-task--toggle\" type=\"checkbox\">\n\t\t\t\t\t<span>" + todoItem.name + "</span>\n\t\t\t\t\t<button class=\"td__body-task--destroy\" data-id=\"" + todoItem.id + "\"><i class=\"mdi mdi-window-close\"></i></button>\n\t\t\t\t</li>";
    container.insertAdjacentHTML("beforeend", html); // let findId = <HTMLElement>document.querySelector(`[data-id="${todoItem.id}"]`)
    // if (findId) {
    // 	findId.addEventListener('click', event => {
    // 		this.toggleState(todoItem);
    // 	})
    // }

    htmlDom = new DOMParser().parseFromString(html, 'text/xml'); // htmlDom = html.trim();

    console.log(htmlDom.firstChild);
    htmlDom.firstChild.addEventListener('click', function () {
      console.log(123);
    });
  };

  TodoService.prototype.render = function (input) {
    var newItem;
    newItem = this.addTask(input);
    console.log(newItem);
    this.renderTodo(newItem);
  };

  TodoService.prototype.clearCompleteTask = function () {
    this.todos = this.todos.filter(function (todo) {
      return todo.state === true;
    });
  };

  TodoService.prototype.allTask = function () {
    return this.todos.slice();
  };

  TodoService.prototype.activeTask = function () {
    return this.todos = this.todos.filter(function (todo) {
      return todo.state === false;
    });
  };

  TodoService.prototype.completeTask = function () {
    return this.todos = this.todos.filter(function (todo) {
      return todo.state === true;
    });
  };

  TodoService.prototype.countTask = function (countElement) {
    if (this.todos.length > 0) {
      countElement.style.display = 'block';
    } else {
      countElement.style.display = 'none';
    }

    return String(this.todos.length);
  };

  TodoService.prototype.findTodoId = function (todoId) {};

  TodoService.prototype.toggleState = function (todo) {
    todo.state = !todo.state;
    return todo.state;
  };

  TodoService.prototype.destroyTask = function () {};

  return TodoService;
}();

exports.TodoService = TodoService;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwL3R5cGVzY3JpcHQvYXBwLnRzIiwic3JjL2FwcC90eXBlc2NyaXB0L3NlcnZpY2UvdG9kby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDRUEsSUFBQSxjQUFBLEdBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUE7O0FBRUEsSUFBQSxRQUFBO0FBQUE7QUFBQSxZQUFBO0FBS0MsV0FBQSxRQUFBLENBQVksS0FBWixFQUF5QjtBQUN4QixTQUFLLFdBQUwsR0FBbUIsSUFBSSxjQUFBLENBQUEsV0FBSixDQUFnQixLQUFoQixDQUFuQjtBQUNBLEdBUEYsQ0FTQztBQUNBO0FBQ0E7OztBQUVBLEVBQUEsUUFBQSxDQUFBLFNBQUEsQ0FBQSxhQUFBLEdBQUEsVUFBYyxZQUFkLEVBQXVDO0FBQ3RDLFdBQU8sS0FBSyxXQUFMLENBQWlCLFNBQWpCLENBQTJCLFlBQTNCLENBQVA7QUFDQSxHQUZEOztBQUlBLEVBQUEsUUFBQSxDQUFBLFNBQUEsQ0FBQSxXQUFBLEdBQUEsVUFBWSxLQUFaLEVBQXlCO0FBQ3hCLFNBQUssV0FBTCxDQUFpQixNQUFqQixDQUF3QixLQUF4QjtBQUNBLEdBRkQ7O0FBSUEsRUFBQSxRQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsR0FBQSxZQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUEsSUFBQTs7QUFDQyxRQUFJLFNBQVMsR0FBcUIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBbEM7QUFDQSxRQUFJLFVBQVUsR0FBZ0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBOUI7QUFDQSxRQUFJLFNBQVMsR0FBZ0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQTdCO0FBQ0EsUUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLHNCQUFULENBQWdDLGVBQWhDLENBQWpCO0FBRUEsSUFBQSxTQUFTLENBQUMsZ0JBQVYs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QSxFQUFJO0FBQUksYUFBQSxJQUFJLENBQUMsS0FBTCxLQUFBLElBQUE7QUFBbUIsS0FEUCxDQUFyQjtBQUdBLEdBSkQ7O0FBTUEsRUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLFNBQUEsR0FBQSxVQUFVLFlBQVYsRUFBbUM7QUFDbEMsUUFBSSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQzFCLE1BQUEsWUFBWSxDQUFDLEtBQWIsQ0FBbUIsT0FBbkIsR0FBNkIsT0FBN0I7QUFDQSxLQUZELE1BRU87QUFDTixNQUFBLFlBQVksQ0FBQyxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0E7O0FBQ0QsV0FBTyxNQUFNLENBQUMsS0FBSyxLQUFMLENBQVcsTUFBWixDQUFiO0FBQ0EsR0FQRDs7QUFTQSxFQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsVUFBQSxHQUFBLFVBQVksTUFBWixFQUEwQixDQUV6QixDQUZEOztBQUdBLEVBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxXQUFBLEdBQUEsVUFBWSxJQUFaLEVBQXNCO0FBQ3JCLElBQUEsSUFBSSxDQUFDLEtBQUwsR0FBYSxDQUFDLElBQUksQ0FBQyxLQUFuQjtBQUNBLFdBQU8sSUFBSSxDQUFDLEtBQVo7QUFDQSxHQUhEOztBQUtBLEVBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxXQUFBLEdBQUEsWUFBQSxDQUFnQixDQUFoQjs7QUFDRCxTQUFBLFdBQUE7QUFBQyxDQXBHRCxFQUFBOztBQUFhLE9BQUEsQ0FBQSxXQUFBLEdBQUEsV0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL21vZGVsL3RvZG8ubW9kZWwnO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi9pbnRlcmZhY2UvdG9kby5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVG9kb1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvdG9kby5zZXJ2aWNlJztcblxuY2xhc3MgVG9kb0xpc3Qge1xuXHRcblx0cHJpdmF0ZSB0b2RvU2VydmljZTogVG9kb1NlcnZpY2U7XG5cblx0XG5cdGNvbnN0cnVjdG9yKHRvZG9zOiBUb2RvW10pIHtcblx0XHR0aGlzLnRvZG9TZXJ2aWNlID0gbmV3IFRvZG9TZXJ2aWNlKHRvZG9zKTtcblx0fVxuXG5cdC8vIHRvZG9Ub2dnbGVTdGF0ZSh0b2RvOiBUb2RvKXtcblx0Ly8gXHR0aGlzLnRvZG9TZXJ2aWNlLnRvZ2dsZVN0YXRlKHRvZG8pO1xuXHQvLyB9XG5cblx0dG9kb0NvdW50VGFzayhjb3VudEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5ne1xuXHRcdHJldHVybiB0aGlzLnRvZG9TZXJ2aWNlLmNvdW50VGFzayhjb3VudEVsZW1lbnQpO1xuXHR9XG5cblx0dG9kb0FkZFRhc2soaW5wdXQ6IHN0cmluZyl7XG5cdFx0dGhpcy50b2RvU2VydmljZS5yZW5kZXIoaW5wdXQpO1xuXHR9XG5cblx0dG9kb0luaXQoKXtcblx0XHRsZXQgdG9kb0lucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9JbnB1dCcpO1xuXHRcdGxldCB0b2RvRm9vdGVyID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZF9fZm9vdGVyJyk7XG5cdFx0bGV0IHRvZG9Db3VudCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGRfX2hlYWRlci1jb3VudCcpO1xuXHRcdGxldCB0b2RvVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGRfX2JvZHktdGFzaycpO1xuXG5cdFx0dG9kb0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG5cdFx0XHRcdHRoaXMudG9kb0FkZFRhc2sodG9kb0lucHV0LnZhbHVlKTtcblx0XHRcdFx0dG9kb0lucHV0LnZhbHVlID0gJydcblx0XHRcdFx0dG9kb0Zvb3Rlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXHRcdFx0XHR0b2RvQ291bnQuaW5uZXJIVE1MID0gdGhpcy50b2RvQ291bnRUYXNrKHRvZG9Db3VudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHQvLyBcdGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZF9fYm9keS10YXNrJykpIHtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coMTIzKTtcblx0XHQvLyBcdFx0dGhpcy50b2RvVG9nZ2xlU3RhdGUoKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9LCBmYWxzZSlcblx0fVxufVxuXG5sZXQgdG9kb0FwcCA9IG5ldyBUb2RvTGlzdChbXSlcblxudG9kb0FwcC50b2RvSW5pdCgpO1xuXG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWwvdG9kby5tb2RlbCc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2UvdG9kby5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVG9kb1NlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UvdG9kb3NlcnZpY2UuaW50ZXJmYWNlJztcblxuXG5sZXQgc3RhdGUgPSBmYWxzZTtcbmV4cG9ydCBjbGFzcyBUb2RvU2VydmljZSBpbXBsZW1lbnRzIFRvZG9TZXJ2aWNlSW50ZXJmYWNlIHtcblx0Ly8gc3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBpZDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSB0b2RvczogVG9kb1tdID0gW107XG5cblx0Y29uc3RydWN0b3IodG9kb3M6IFRvZG9bXSkge1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZUlkKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRjb25zdCBjaGFycyA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSFVKS0xNTk9QUVJTVFVWV1hZWic7XG5cdFx0bGV0IElEID0gJyc7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0SUQgKz0gY2hhcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzLmxlbmd0aCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gSUQ7XG5cdH1cblx0cHJpdmF0ZSBhZGRUYXNrKHRhc2s6IHN0cmluZyk6IFRvZG8ge1xuXHRcdGxldCB0b2RvOiBUb2RvID0ge1xuXHRcdFx0aWQ6IHRoaXMuZ2VuZXJhdGVJZCg0KSxcblx0XHRcdG5hbWU6IHRhc2ssXG5cdFx0XHRzdGF0ZTogZmFsc2UsXG5cdFx0fTtcblx0XHR0aGlzLnRvZG9zLnB1c2godG9kbyk7XG5cdFx0Y29uc29sZS5sb2codGhpcy50b2Rvcyk7XG5cdFx0XG5cdFx0cmV0dXJuIHRvZG87XG5cdH1cblxuXHRwcml2YXRlIHJlbmRlclRvZG8odG9kb0l0ZW06IHtpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHN0YXRlOiBib29sZWFufSk6IHZvaWR7XG5cdFx0bGV0IGNvbnRhaW5lciA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keVRhc2tzJyk7XG5cdFx0bGV0IGh0bWw6IHN0cmluZywgbmV3SHRtbDogc3RyaW5nLCBodG1sRG9tO1xuXHRcdGh0bWwgPSAgYDxsaSBjbGFzcz1cInRkX19ib2R5LXRhc2ske3RvZG9JdGVtLnN0YXRlID09PSB0cnVlID8gJyB0ZF9fYm9keS10YXNrLS1jb21wbGV0ZScgOiAnJyB9XCIgZGF0YS1pZD1cIiR7dG9kb0l0ZW0uaWR9XCIgZGF0YS1zdGF0ZT1cIiR7dG9kb0l0ZW0uc3RhdGUgPT09IHRydWUgPyAnY29tcGxldGUnIDogJ2FjdGl2ZSd9XCI+XG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwidGRfX2JvZHktdGFzay0tdG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCI+XG5cdFx0XHRcdFx0PHNwYW4+JHt0b2RvSXRlbS5uYW1lfTwvc3Bhbj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidGRfX2JvZHktdGFzay0tZGVzdHJveVwiIGRhdGEtaWQ9XCIke3RvZG9JdGVtLmlkfVwiPjxpIGNsYXNzPVwibWRpIG1kaS13aW5kb3ctY2xvc2VcIj48L2k+PC9idXR0b24+XG5cdFx0XHRcdDwvbGk+YFxuXHRcdFxuXHRcdGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbCk7XG5cblx0XHQvLyBsZXQgZmluZElkID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHt0b2RvSXRlbS5pZH1cIl1gKVxuXG5cdFx0Ly8gaWYgKGZpbmRJZCkge1xuXHRcdC8vIFx0ZmluZElkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdC8vIFx0XHR0aGlzLnRvZ2dsZVN0YXRlKHRvZG9JdGVtKTtcblx0XHQvLyBcdH0pXG5cdFx0Ly8gfVxuXHRcdGh0bWxEb20gPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L3htbCcpXG5cdFx0Ly8gaHRtbERvbSA9IGh0bWwudHJpbSgpO1xuXHRcdGNvbnNvbGUubG9nKGh0bWxEb20uZmlyc3RDaGlsZCk7XG5cdFx0aHRtbERvbS5maXJzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdGNvbnNvbGUubG9nKDEyMyk7XG5cdFx0fSlcblx0XHRcblx0fVxuXHRcblx0cmVuZGVyKGlucHV0OiBzdHJpbmcpOiB2b2lke1xuXHRcdGxldCBuZXdJdGVtO1xuXHRcdG5ld0l0ZW0gPSB0aGlzLmFkZFRhc2soaW5wdXQpO1xuXHRcdGNvbnNvbGUubG9nKG5ld0l0ZW0pO1xuXG5cdFx0dGhpcy5yZW5kZXJUb2RvKG5ld0l0ZW0pO1xuXHR9XG5cdGNsZWFyQ29tcGxldGVUYXNrKCkge1xuXHRcdHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uc3RhdGUgPT09IHRydWUpO1xuXHR9XG5cblx0YWxsVGFzaygpIHtcblx0XHRyZXR1cm4gdGhpcy50b2Rvcy5zbGljZSgpO1xuXHR9XG5cblx0YWN0aXZlVGFzaygpIHtcblx0XHRyZXR1cm4gKHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcihcblx0XHRcdHRvZG8gPT4gdG9kby5zdGF0ZSA9PT0gZmFsc2Vcblx0XHQpKTtcblx0fVxuXG5cdGNvbXBsZXRlVGFzaygpIHtcblx0XHRyZXR1cm4gKHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcihcblx0XHRcdHRvZG8gPT4gdG9kby5zdGF0ZSA9PT0gdHJ1ZVxuXHRcdCkpO1xuXHR9XG5cblx0Y291bnRUYXNrKGNvdW50RWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnRvZG9zLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvdW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y291bnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0fVxuXHRcdHJldHVybiBTdHJpbmcodGhpcy50b2Rvcy5sZW5ndGgpO1xuXHR9XG5cblx0ZmluZFRvZG9JZCAodG9kb0lkOiBudW1iZXIpe1xuXHRcdFxuXHR9XG5cdHRvZ2dsZVN0YXRlKHRvZG86IFRvZG8pOiBib29sZWFue1xuXHRcdHRvZG8uc3RhdGUgPSAhdG9kby5zdGF0ZVxuXHRcdHJldHVybiB0b2RvLnN0YXRlO1xuXHR9XG5cblx0ZGVzdHJveVRhc2soKSB7fVxufVxuIl19
