let toDoItems = [];
const form = document.querySelector("form");
const input = document.querySelector(".todo");
const newList = document.createElement("ul");
addToDO = (text) => {
const toDo = {
    text,
    checked: false,
    id: Date.now(),
};
toDoItems.push(toDo);
console.log(toDoItems);
newList.innerHTML = `
`
}

form.addEventListener("submit", e => {
    e.preventDefault();
    const item = input.value.trim();
    if (item !== "") {
        addToDO(item);
        input.value = "";
        input.focus();
    }
})
