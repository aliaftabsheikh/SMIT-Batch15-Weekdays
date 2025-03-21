let idCount = 1

function addTodo() {
    const inputElem = document.querySelector('#input_todo')
    const todoList = document.querySelector('#todo_list')
    // const todo_item = document.querySelector('#todo_item')

    // const listItem = document.createElement('li')
    // listItem.innerText = inputElem.value

    // console.log(listItem)

    // todo_item.appendChild(listItem)

    const todoItem = document.createElement('div')
    todoItem.setAttribute('class', 'todo_item')
    todoItem.setAttribute('id', `${idCount}`)

    todoItem.innerHTML += `<p class="text">${inputElem.value}</p>

            <button class="del_btn" onclick="deleteTodo(${idCount})">Delete</button>
            <button class="edit_btn"  onclick="editTodo(${idCount})">Edit</button>`

    todoList.appendChild(todoItem)
    inputElem.value = ''
    idCount++;
}

function editTodo(id) {
    const inputElem = document.querySelector('#input_todo')

    const todoItem = document.getElementById(id)

    todoItem.innerHTML = `<p class="text">${inputElem.value}</p>

            <button class="del_btn" onclick="deleteTodo(${id})">Delete</button>
            <button class="edit_btn"  onclick="editTodo(${id})">Edit</button>`


    inputElem.value = ''
}



function deleteTodo(id) {
    const todoItem = document.getElementById(id)
    todoItem.remove()
}