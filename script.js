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
<input id="${toDo.id}" type="checkbox" class="checkbox"/>
<label for=${toDo.id} class="tick js-tick"> </label>
 <span class="todo-text">${toDo.text}</span>
 <span class="material-icons close">
   close
  </span>
  <span></span>
  <li/>
`
  );
};
function toggleDone(key) {
  const index = toDoItems.findIndex((item) => item.id === Number(key));
  toDoItems[index].checked = !toDoItems[index].checked;
  const item = document.querySelector(".todo-text");
  if (toDoItems[index].checked) {
    item.classList.add("done");
  } else {
    item.classList.remove("done");
  }
}
function deleteTodo(key) {
  toDoItems = toDoItems.filter((item) => item.id !== Number(key));
  const item = document.querySelector(".todo-text");
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
  if (e.target.classList.contains("checkbox")) {
    const itemKey = event.target.parentElement.dataset.key;

    toggleDone(itemKey);
  }
  if (event.target.classList.contains("close")) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});
