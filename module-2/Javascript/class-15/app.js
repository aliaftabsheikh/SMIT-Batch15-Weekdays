// const anyNumber = 9
// console.log("ToFixed",    anyNumber.toFixed(4))





// const date = new Date();


// GET WEEK DAY 


// const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


// const shortDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// console.log(shortDay[date.getDay()])


// GET MONTH NAME

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// const shortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// console.log(shortMonth[date.getMonth()])



// GET DATE

// const currentDate = date.getDate()
// console.log(currentDate)


// getFullYear

// const getYear = date.getFullYear()
// console.log(getYear)


// getHour


// const hour = date.getHours()

// console.log(hour)


// getMinutes

// const minutes = date.getMinutes()
// console.log(minutes)

// getSeconds

// const seconds = date.getSeconds()
// console.log(seconds)

// getMilliseconds



// for(let i= 1; i<=1000; i++){
//     console.log( date.getMilliseconds())
// }

// getTime

// const time = date.getTime()
// console.log(time)


// const time = date.getTime()

// console.log(time / (1000 * 60 * 60 * 24 * 365.25))


// const doomDay = new Date("June 30, 2035");
// const currentDate = new Date();

// const dmTime = doomDay.getTime()
// const currentTime = currentDate.getTime()


// // console.log("dmTime", dmTime)
// // console.log("currentTime", currentTime)

// const diffTime = doomDay - currentDate

// console.log(diffTime/ (1000 * 60 * 60 * 24 ))

// const date = new Date();


// date.setHours(12)
// date.setMonth(0)

// date.setDate(25)


// console.log(date.getHours())
// console.log(date.getMonth())
// console.log(date.getDate())





function tellTime(){
    const date = new Date()

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const mSeconds = date.getMilliseconds()


    alert(`Your current Hour is ${hour} & minute is ${minutes}, seconds is ${seconds}, millisecond is ${mSeconds}`)
}


// tellTime()