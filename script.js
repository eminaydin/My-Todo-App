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
  body.style.height = 100 + "%";
  const item = input.value.trim();
  if (item !== "") {
    addToDO(item);
    input.value = "";
    input.focus();
  }
});
list.addEventListener("click", (event) => {
  // Close with animation when click happens on close button
  if (event.target.classList.contains("close")) {
    document.getElementsByClassName(".list-item").className =
      "animated slideOutRight";
    console.log(document.getElementsByClassName(".list-item").className);
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
    console.log(itemKey);
  }
});
