
let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');

let todoList = [];

addButton.addEventListener('click', function() {

    const newTodo = {
        todo: addMessage.value,
        checked: false,
        important:false
    }

    todoList.push(newTodo);
    viewMessages();
    // console.log(todoList);
})

function viewMessages() {
    let addTask = '';
    todoList.forEach( function (item, i) {
        console.log(item);

        addTask += `
        <li>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
            <label for='item_${i}'>${item.todo}</label>
        </li>
        `;

        todo.innerHTML = addTask;
    })
}