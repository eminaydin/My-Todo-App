let toDoItems = [];
const form = document.querySelector("form");
const input = document.querySelector(".todo");
const list = document.querySelector(".todo-list");

addToDO = (text) => {
  const toDo = {
    text,
    checked: false,
    id: Date.now(),
  };
  toDoItems.push(toDo);
  list.insertAdjacentHTML(
    "beforeend",
    `
<li data-key="${toDo.id}" class ="todo-li">
   <label for=${toDo.id} class="tick js-tick"> </label>
 <input id="${toDo.id}" type="checkbox"/>
 <span>${toDo.text}</span>
 <span class="material-icons close">
   close
  </span>
  <li/>
`
  );
};
function toggleDone(key) {
  const index = toDoItems.findIndex((item) => item.id === Number(key));
}
function deleteTodo(key) {
  toDoItems = toDoItems.filter(item => item.id !== Number(key));
  const item = document.querySelector(`[data-key='${key}']`);
  item.remove();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".todo-hint").style.display = "none";
  const item = input.value.trim();
  if (item !== "") {
    addToDO(item);
    input.value = "";
    input.focus();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  if (event.target.classList.contains('close')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});
