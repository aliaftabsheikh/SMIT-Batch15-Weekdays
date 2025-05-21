// HIGHER ORDER FUNCTION

function x(y) {
    console.log('x');

    y()
}


// const addToCart = [1000, 280, 600, 950, 300, 2000, 7000, 3000, 1100000, 200000, 99999999999999]

// function calculatePrice() {
//     let sum = 0;

//     for (let i = 0; i < addToCart.length; i++) {
//         sum += addToCart[i]
//     }

//     return sum
// }

// console.log(calculatePrice())

// function findMax(){
//     let max = 0;

//     for(let i = 0; i < addToCart.length; i++){
//         if(addToCart[i] > max){
//             max = addToCart[i]
//         }
//     }

//     return max
// }

// console.log(findMax())


// const findMaxVal = addToCart.reduce((accumelator, current)=> {
//     if(current > accumelator){
//         accumelator = current
//     }
//     return accumelator
// }, 0)

// console.log(findMaxVal);


// const calculateSum = addToCart.reduce((accumelator, current) => accumelator = accumelator + current, 0)

// console.log(calculateSum);


const dummyData = [
    {
        id: 1,
        lastName: 'Aftab',
        firstName: 'Ali',
        age : 23
    },
      {
        id: 5,
        lastName: 'Saleem',
        firstName: 'Subhan',
        age: 16
    },
    {
        id: 2,
        lastName: 'Abbas',
        firstName: 'Aun',
        age: 21
    },
    {
        id: 3,
        lastName: 'Arshad',
        firstName: 'Waqar',
        age: 36
    },
    {
        id: 4,
        lastName: 'Hussain',
        firstName: 'Muhammad',
        age: 17
    },
]


// const isEligible = dummyData.filter((item)=>{
//     if(item.age < 18){
//         return item
//     }
// }).map((item)=>{
//     return `${item.firstName} ${item.lastName}`
// })


// console.log(isEligible);




const data = undefined

const firstName = data?.map((item)=>{
    return item.firstName
})

if(!firstName){
    console.log("Data is not available");
}else{
    console.log((firstName));
}



// console.log("ABC ");
// console.log("ABC ");
// console.log("ABC ");
// console.log("ABC ");
// console.log("ABC ");
// console.log("ABC ");

