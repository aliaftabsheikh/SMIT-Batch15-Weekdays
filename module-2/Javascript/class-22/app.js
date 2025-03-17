//! getElementsByClassName

// const headingElementsByClass = document.getElementsByClassName('para')
// console.log(headingElementsByClass)


// headingElementsByClass[1].style.backgroundColor = 'red'


//! getElementById

// const headingElemById = document.getElementById('para-id-3')

// headingElemById.style.fontSize = '50px'
// headingElemById.style.backgroundColor = 'orange'
// console.log(headingElemById)


//! getElementByTagName


// const headingElemByTagName = document.getElementsByTagName('p')
// headingElemByTagName[1].style.backgroundColor = 'lightgreen'

// console.log(headingElemByTagName)

// querySelector

// QuerySelector Always return only one element

// const headingElem = document.querySelector('#para-id-1') //ID

// const headingElem = document.querySelector('.para') //Class

// const headingElem = document.querySelector('p') //TagName


// querySelectorAll

// const headingElem = document.querySelectorAll('#para-id-1')
// const headingElem = document.querySelectorAll('.para')
const headingElem = document.querySelectorAll('p')


console.log(headingElem)  

for(let i = 0; i < headingElem.length; i++){
    headingElem[i].style.backgroundColor = 'red'
}
// headingElem


