console.log('This is the sum module.');

const userMessage = 'This is a message from sum file !'



function calculateSum(a, b) {
  console.log(`The sum of ${a} and ${b} is ${a + b}`);
}

module.exports = {
  userMessage,
  calculateSum
} 
