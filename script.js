let toDoItems = [];
const form = document.querySelector("form");
const input = document.querySelector(".todo");
const list = document.querySelector(".list");

addToDO = (text) => {
  const toDo = {
    text,
    id: Date.now(),
  };
  toDoItems.push(toDo);
  list.insertAdjacentHTML(
    "beforeend",
    `
  <li class="list-item animated slideInLeft" data-key="${toDo.id}">
  <span class="close">x</span>
  <input type="checkbox" class="hidden-box" id="${toDo.id}"/>
  <label for=${toDo.id} class="check--label">
    <span class="check--label-box"></span>
    <span class="check--label-text">${toDo.text}</span>
  </label>
</li>
`
  );
};
function toggleDone(key) {
  const index = toDoItems.findIndex(item => item.id === Number(key));
  toDoItems[index].checked = !toDoItems[index].checked;
  const item = document.querySelector(`.hidden-box`);
  if (toDoItems[index].checked) {
    item.setAttribute("checked", "");
    console.log(toDoItems[index]);

  }
}

function deleteTodo(key) {
  toDoItems = toDoItems.filter((item) => item.id !== Number(key));
  const item = document.querySelector(`[data-key="${key}"]`);
  item.remove();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = input.value.trim();
  if (item !== "") {
    addToDO(item);
    input.value = "";
    input.focus();
  }
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains('check--label-box')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (event.target.classList.contains("close")) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});
