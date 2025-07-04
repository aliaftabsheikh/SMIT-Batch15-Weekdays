// const sum = (...nums) => nums.reduce((acc, n) => acc + n);
// const values = [10, 20, 30];

// console.log(sum(values)); 
// console.log(sum(...values));

const user = {
    name: "Ali",
    // settings: null
}

// console.log(user.settings.theme.dark); 
console.log(user.settings );
console.log(user.settings?.theme?.dark || "light"); //