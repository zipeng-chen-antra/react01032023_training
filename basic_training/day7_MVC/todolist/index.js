const API = (() => {
  const URL = "http://localhost:3000/todos";

  const getTodos = () => {
    return fetch(URL).then((res) => res.json());
  };

  const postTodo = (newTodo) => {
    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then((res) => res.json());
  };

  const removeTodo = (id) => {
    return fetch(`${URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch(console.log);
  };

  return {
    getTodos,
    postTodo,
    removeTodo,
  };
})();

class TodoModel {
  #todos;
  constructor() {
    this.#todos = [];
  }

  setTodos(todos) {
    this.#todos = todos;
  }

  getTodos() {
    return this.#todos;
  }

  //{task:"task"}
  addTodo(newTodo) {
    return API.postTodo(newTodo).then((addedTodo) => {
      this.#todos.push(addedTodo);
      return addedTodo;
    });
  }

  removeTodo(id) {
    return API.removeTodo(id).then((removedTodo) => {
      this.#todos = this.#todos.filter((todo) => todo.id !== id);
      return removedTodo;
    });
  }
}

const todos = [
  { task: "cook", id: 1 },
  { task: "play", id: 2 },
  { task: "code", id: 3 },
];

class TodoView {
  constructor() {
    this.todoForm = document.querySelector(".todo-list-app__form");
    this.todoInput = document.querySelector(".todo-list-app__input");
    this.todoList = document.querySelector(".todo-list");
    this.todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  renderTodos(todos) {
    this.todoList.textContent = "";
    todos.forEach((todo) => {
      this.renderTodo(todo);
    });

    // const todosInnerHTML = todos
    //   .map((todo) => {
    //     return this.renderTodo(todo);
    //   })
    //   .join("");

    // this.todoList.innerHTML = todosInnerHTML;
  }

  renderTodo(todo) {
    // console.log(this);
    const todoElem = document.createElement("div");
    todoElem.classList.add("todo");

    const todoTaskElem = document.createElement("div");
    todoTaskElem.classList.add("todo__task");
    todoTaskElem.textContent = todo.task;

    const todoActions = document.createElement("div");
    todoActions.classList.add("todo__actions");

    const editTodo = document.createElement("button");
    editTodo.textContent = "EDIT";
    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = "DELETE";

    todoActions.append(editTodo, deleteTodo);
    todoElem.append(todoTaskElem, todoActions);

    this.todoList.append(todoElem);
    //     return `<div class="todo">
    //     <div class="todo__task">${todo.task}</div>
    //     <div class="todo__actions">
    //         <button class="todo__btn-edit">EDIT</button>
    //         <button class="todo__btn-delete">DELETE</button>
    //     </div>
    // </div>`;

  }
}


class TodoController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.initialize();
  }

  initialize() {
    this.fetchData();
    this.setUpEvents();
  }

  fetchData() {
    API.getTodos().then((todos) => {
      console.log(todos);
      this.model.setTodos(todos);
      this.view.renderTodos(todos);
    });
  }

  setUpEvents() {
    this.setUpFormEvent();
  }

  setUpFormEvent() {
    this.view.todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputValue = this.view.todoInput.value;
      console.log(inputValue);
      this.model
        .addTodo({
          task: inputValue,
        })
        .then((data) => {
          this.view.renderTodos(this.model.getTodos());
        });
    });
  }

}

const todoView = new TodoView();
const todoModel = new TodoModel();
const todoController = new TodoController(todoView, todoModel);
