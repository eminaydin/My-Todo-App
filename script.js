let toDoItems = [];
const form = document.querySelector("form");
const input = document.querySelector(".todo");
const list = document.querySelector(".list");
const body = document.querySelector("body");

addToDO = (text) => {
  const toDo = {
    text,
    id: Date.now(),
  };

  toDoItems.push(toDo);
  // Append list structure to ul element
  list.insertAdjacentHTML(
    "beforeend",
    `
  <li class="list-item animated slideInLeft" data-key="${toDo.id}">
  <input type="checkbox" class="hidden-box" id="${toDo.id}"/>
  <label for=${toDo.id} class="check--label">
    <span class="check--label-box"></span>
    <span class="check--label-text">${toDo.text}</span>
    <span class="close">x</span>
  </label>
</li>
`
  );
};

function deleteTodo(key) {
  const item = document.querySelector(`[data-key="${key}"]`);
  item.remove();
}
// On submit, cut the whitespaces of given input and if it's not empty add it to list and clear input field
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const style = body.style;
  style.height = 100 + "%";
  style.marginTop = 10 + "px";
  const item = input.value.trim();
  if (item !== "") {
    addToDO(item);
    input.value = "";
    input.focus();
  }
});
//delete the item if close button clicked
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("close")) {
    const itemKey = event.target.parentElement.parentElement.dataset.key;
    deleteTodo(itemKey);
    console.log(itemKey);
  }
});
