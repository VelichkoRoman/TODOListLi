
let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let deleteButton = document.querySelector('.btn_delete');
let todo = document.querySelector('.todo');

let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    viewMessages();
}



addButton.addEventListener('click', () => {

    const newTodo = {
        todo: addMessage.value,
        checked: false,
        important:false,
    }

    todoList.push(newTodo);

    viewMessages();

    // console.log(todoList);
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessage.value = '';
})



function viewMessages() {
    let addTask = '';
    if (todoList.length === 0) todo.innerHTML = '';
    todoList.forEach((item, i) => {
        console.log(item);

        addTask += `
        <li class="li_block">
            <div>
                <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
                <label for='item_${i}'>${item.todo}</label>
            </div>
            <div>
                <button class="btn_delete">Delete</button>
            </div>
            </li>
            `;
            
            todo.innerHTML = addTask;
    })
}

todo.addEventListener('change', (e) =>{
    let forLabel = todo.querySelector('[for=' + e.target.getAttribute('id'));
    let valueLabel = forLabel.innerHTML;
    todoList.forEach(function(item){
        if (item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }  
})

todo.addEventListener('contextmenu', (e) => {
    e.preventDefault();

        todoList.forEach((item, i) => {
          if(e.ctrlKey && item.checked) {
            //   console.log('Нажата клавиша Ctrl?', e.ctrlKey);
              todoList.splice(i, 1);
          } 
        });
        viewMessages();
        localStorage.setItem('todo', JSON.stringify(todoList));
    })
    console.log(valueLabel);
})

// console.log(todo);