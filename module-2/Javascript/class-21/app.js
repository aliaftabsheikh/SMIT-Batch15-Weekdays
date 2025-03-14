// NESTED LOOP

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log(`${i}: ${j}`)
//     }
//     console.log("===============================")
// }

// let rows = '';
// for( let i = 1; i <= 4;  i++ ){
//     for(let j = 1; j < i; j++){
//         rows += '*'
//         console.log(
//            rows
//         )
//     }
// }

function randomColor(){
    let color = "#";
    let letters = "0123456789ABCDEF";

    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;

}

function changeColor() {
    const heading = document.getElementsByTagName('button')[0]

    heading.style.backgroundColor = randomColor()
    heading.style.color = randomColor()
}