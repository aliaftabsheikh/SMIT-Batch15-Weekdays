function greeting(){
    alert("Hello World !")
}


// function differentImage(imgElement){
//     // imgElement.style.transition= "all 2s";
//     imgElement.style.transform = 'scale(1.1)';  // Slight zoom-in effect
//     imgElement.style.opacity = '0.8';
//     imgElement.src = "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/05/ferrari-12cilindri.jpg";
// }

// function orignalImage(imgElement){
//     // imgElement.style.transition = "all 2s";
//     imgElement.style.transform = 'scale(1)';  // Reset zoom to normal
//     imgElement.style.opacity = '1'; 
//     imgElement.src = "https://cdn.ferrari.com/cms/network/media/img/resize/6195238ab3c7ea5975d9077d-f150bdcoverthree1300x730pg";
// }



// function changeEmoji(emoji){
 
//     emoji.textContent = "😝";
//     emoji.fontSize = '120'
// }

// function sameEmoji(emoji){
//     emoji.textContent = "😂";
//     emoji.fontSize = '120'
// }


// function changeColor(inpELement){
//     inpELement.style.backgroundColor = "red";
//     inpELement.style.color = "white";

// }


// function sameColor(inpELement){
//     inpELement.style.backgroundColor = "white";
//     inpELement.style.color = "black";
// }



function randomColor(box){
    let color = "#";
    let letters = "0123456789ABCDEF";

    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;

}


console.log(randomColor())



function changeBoxColor(box) {
    box.style.backgroundColor = randomColor();
}
