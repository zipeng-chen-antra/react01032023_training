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

  fetchTodos(){
    return API.getTodos().then(todos=>{
      this.setTodos(todos);
      return todos;
    })
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
      this.#todos = this.#todos.filter((todo) => todo.id !== +id);

      return removedTodo;
    });
  }
}

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
      this.appendTodo(todo);
    });

    // const todosInnerHTML = todos
    //   .map((todo) => {
    //     return this.appendTodo(todo);
    //   })
    //   .join("");

    // this.todoList.innerHTML = todosInnerHTML;
  }

  removeTodoElem(domID){
    const element = document.getElementById(domID);
    element.remove()
  }

  appendTodo(todo) {
    const todoElem = document.createElement("div");
    todoElem.classList.add("todo");
    todoElem.setAttribute("id", "todo"+todo.id);

    const todoTaskElem = document.createElement("div");
    todoTaskElem.classList.add("todo__task");
    todoTaskElem.textContent = todo.task;

    const todoActions = document.createElement("div");
    todoActions.classList.add("todo__actions");

    const editTodo = document.createElement("button");
    editTodo.textContent = "EDIT";
    editTodo.classList.add("todo__btn-edit");
    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = "DELETE";
    deleteTodo.classList.add("todo__btn-delete");

    todoActions.append(editTodo, deleteTodo);
    todoElem.append(todoTaskElem, todoActions);

    this.todoList.append(todoElem);

    //     return `<div class="todo" id="${todo.id}">
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
    this.model.fetchTodos();
    this.setUpEvents();
    this.model.fetchTodos().then(todos=>{
      this.view.renderTodos(todos);
    })
  }

  setUpEvents() {
    this.setUpFormEvent();
    this.setUpRemoveEvent();
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
          // this.view.renderTodos(this.model.getTodos());
          // console.log(data)
          this.view.appendTodo(data);
        });
    });
  }

  setUpRemoveEvent() {
    this.view.todoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("todo__btn-delete")) {
        const domID = e.target.parentNode.parentNode.getAttribute("id");
        const id = domID.substring(4);
        this.model.removeTodo(id).then((data) => {
          console.log(this.model.getTodos());
          this.view.removeTodoElem(domID)
        });
      }

      if(e.target.classList.contains("todo__btn-edit")){

      }

    });
  }
}

const todoView = new TodoView();
const todoModel = new TodoModel();
const todoController = new TodoController(todoView, todoModel);