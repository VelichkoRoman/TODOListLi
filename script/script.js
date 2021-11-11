
let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');

let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    viewMessages();
}



addButton.addEventListener('click', function() {

    const newTodo = {
        todo: addMessage.value,
        checked: false,
        important:false
    }

    todoList.push(newTodo);
    viewMessages();
    // console.log(todoList);
    localStorage.setItem('todo', JSON.stringify(todoList));
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

todo.addEventListener('change', function(e){
    let forLabel = todo.querySelector('[for=' + e.target.getAttribute('id'));
    let valueLabel = forLabel.innerHTML;
    todoList.forEach(function(item){
        if (item.todo === valueLabel){
            item.checked = !item.checked;
            addDeleteButton += ``
            localStorage.setItem('todo', JSON.stringify(todoList));

        }
    })
    console.log(valueLabel);
})

console.log(todo);