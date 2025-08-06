console.log('This is greeting file!');


const welcomeMessage = 'Hello !'

function greet(message){
    console.log(message, 'from function !');
}


module.exports = {
    welcomeMessage,
    greet
}
