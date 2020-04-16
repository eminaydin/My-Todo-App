let toDoItems = [];
const form = document.querySelector("form");
const input = document.querySelector(".todo");
const list = document.querySelector(".todo-list")


addToDO = (text) => {
const toDo = {
    text,
    checked: false,
    id: Date.now(),
};
toDoItems.push(toDo);
console.log(toDoItems); 

list.insertAdjacentHTML('beforeend', `
<li data-key="${toDo.id}" class = "todo-li">
<label class = "todo-label">
        <input type="checkbox" class="filled-in" />
        <span class="todo-item"> <span class = "todo-text"> ${toDo.text}</span></span>
        <span class="material-icons close">
  close
  </span>
      </label>


  <li/>
` 
);

}

function toggleDone(key) {
    const index = toDoItems.findIndex(item => item.id === (key));
    toDoItems[index].checked = !toDoItems[index].checked;
  
    const item = document.querySelector(`[data-key='${key}']`);
    if (toDoItems[index].checked) {
      item.classList.add('done');
      console.log("chedced");
      
    } else {
      item.classList.remove('done');
    }
  }



form.addEventListener("submit", e => {
    e.preventDefault();
    const item = input.value.trim();
    if (item !== "") {
        addToDO(item);
        input.value = "";
        input.focus();
    }
});

list.addEventListener('click', event => {
    if (event.target.classList.contains('todo-li')) {
      const itemKey = event.target.parentElement.dataset.key;
      toggleDone(itemKey);
      console.log("askdaskda");
      
    }
  });