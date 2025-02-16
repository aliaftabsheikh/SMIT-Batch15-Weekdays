//! SLICE

// const fruits = ["Mango", "Apple", "Banana", "Strawberry", "Grapes", "Pinapple", "Orange"]

                                  
// const modifiedFruits = fruits.slice(0, 1)

// console.log(modifiedFruits)
// console.log(fruits)



//! SPLICE


// STARTING INDEX
// DELETE COUNT
// ITEMS

// OVERWRITE ORIGNAL ARRAY

// const fruits = ["Mango", "Apple", "Banana", "Strawberry", "Grapes", "Pinapple", "Orange"]

// const modifiedFruits = fruits.splice(3, 3, "KIWI")


// console.log(modifiedFruits)
// console.log(fruits)



// LOOPS !


// const table = +prompt("Enter table name !", 10);

// for(let i = 1; i <= 10; i++){
//    console.log(`${table} X ${i} = ${table * i}`)
// }


// NESTED LOOP



for(let i = 1; i <= 5; i++ ){
    let stars = ''
    for(j = 1; j <= i; j++){
        stars += '*'
    }

    console.log(stars)
}
