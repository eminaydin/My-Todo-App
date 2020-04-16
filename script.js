let toDoItems = [];

addToDO = (text) => {
const toDo = {
    text,
    checked: false,
    id: Date.now(),
};
toDoItems.push(toDo);

}
