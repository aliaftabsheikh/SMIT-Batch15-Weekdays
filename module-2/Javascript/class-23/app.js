// querySelector return only one element

const headingElemById = document.querySelector('#heading-1') //ID, Class, TagName
const headingElemByClass = document.querySelector('.heading') //ID, Class, TagName
const headingElemByTagName = document.querySelector('h1') //ID, Class, TagName


//querySelectorAll return all elements

const paraElemByClass = document.querySelectorAll('.para')
// paraElemByClass[1].style.backgroundColor = 'red'
// paraElemByClass[1].style.fontSize = '50px'


// const paraElem = document.querySelector('#para-1')

// paraElem.innerHTML = '<span class="special-text" id="hello-world">Roza hai ??</span>'

// console.log(paraElem.innerHTML)



function addTodo(){
    const inputElem = document.querySelector('#input_todo')
    // const todo_list = document.querySelector('#todo_list')
    const todo_item = document.querySelector('#todo_item')

    // const listItem = document.createElement('li')
    // listItem.innerText = inputElem.value

    // console.log(listItem)

    // todo_item.appendChild(listItem)

    todo_item.innerHTML += `<li>${inputElem.value}</li>`

    inputElem.value = ''
}

