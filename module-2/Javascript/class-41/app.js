// MAP (HIGHER ORDER FUNCTION )


// const names = ['Ali', 'Waqar', 'Aun', 'Bilal']

// const newNames = names.map((item)=> {
//   return 'Hello' + item
// })


const dummyData = [
    {
        id: 1,
        name: 'Ali',
        age : 23
    },
      {
        id: 5,
        name: 'Subhan',
        age: 16
    },
    {
        id: 2,
        name: 'Aun',
        age: 21
    },
    {
        id: 3,
        name: 'Waqar',
        age: 36
    },
    {
        id: 4,
        name: 'Hussain',
        age: 17
    },
  

]


// console.log(newNames);


// const num = [1, 2, 3, 4]


// function double(item){
//     return item * 2
// }

// function triple(item){
//     return item * 3
// }


// const newNumbers = num.map(triple)

// console.log(newNumbers);


// const newData = dummyData.map((item)=>{
//     return `${item.name} ---- ${item.id}`
// })

// newData.push('Kashif --- 5');

// console.log(newData);


// FILTER 

// const randomNumbers = [3, 5, 2, 8, 4, 10, 5]

// const isEven = randomNumbers.filter((item)=> {
//     return item % 2 === 0
// })

// const isOdd = randomNumbers.filter((item)=>{
//      return item % 2 !== 0
// })

// console.log(isEven);
// console.log(isOdd);



// const isEligible = dummyData.filter((item)=>{
//     return item.age > 18
// })

// const isRejected = dummyData.filter((item)=>{
//     return item.age < 18
// })

// console.log(isEligible);
// console.log(isRejected);



// REDUCE 


const numbers = [2, 3, 8, 10, 82, 78, 348, 8383, 3833993, 8383, 382302]

function calculate(num){
    let sum = 0

    for(let i = 0; i < num.length; i++){
        sum+= num[i]
    }

    return sum
}


const newSum = numbers.reduce((accumelator, current)=> {
   return  accumelator = accumelator + current
}, 0)


console.log(newSum);


console.log(calculate(numbers));
