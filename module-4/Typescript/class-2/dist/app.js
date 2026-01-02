// import inquirer from 'inquirer';
// import chalk from 'chalk';
// interface CalculatorInput {
//   num1: number;
//   num2: number;
//   operator: string;
// }
// interface ContinueAnswer {
//   continueCalculating: boolean;
// }
// const performCalculation = (num1: number, num2: number, operator: string): number | string => {
//   switch (operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       if (num2 === 0) {
//         return 'Error: Division by zero!';
//       }
//       return num1 / num2;
//     case '%':
//       return num1 % num2;
//     case '**':
//       return Math.pow(num1, num2);
//     default:
//       return 'Invalid operator';
//   }
// };
// const calculator = async (): Promise<void> => {
//   console.log(chalk.cyan.bold('\n========== CLI CALCULATOR ==========\n'));
//   let continueLoop = true;
//   while (continueLoop) {
//     const answers: CalculatorInput = await inquirer.prompt([
//       {
//         type: 'number',
//         name: 'num1',
//         message: chalk.greenBright('Enter first number:'),
//         validate: (value: unknown) => {
//           if (isNaN(Number(value))) {
//             return 'Please enter a valid number';
//           }
//           return true;
//         },
//       },
//       {
//         type: 'list',
//         name: 'operator',
//         message: chalk.greenBright('Select an operator:'),
//         choices: [
//           { name: chalk.green('+  (Addition)'), value: '+' },
//           { name: chalk.green('-  (Subtraction)'), value: '-' },
//           { name: chalk.green('*  (Multiplication)'), value: '*' },
//           { name: chalk.green('/  (Division)'), value: '/' },
//           { name: chalk.green('%  (Modulus)'), value: '%' },
//           { name: chalk.green('** (Power)'), value: '**' },
//         ],
//       },
//       {
//         type: 'number',
//         name: 'num2',
//         message: chalk.yellow('Enter second number:'),
//         validate: (value: unknown) => {
//           if (isNaN(Number(value))) {
//             return 'Please enter a valid number';
//           }
//           return true;
//         },
//       },
//     ]);
//     const result = performCalculation(answers.num1, answers.num2, answers.operator);
//     console.log(
//       chalk.bgMagentaBright.white.bold(`\n${answers.num1} ${answers.operator} ${answers.num2} = ${result}\n`)
//     );
//     const continueAnswer = await inquirer.prompt<ContinueAnswer>([
//       {
//         type: 'confirm',
//         name: 'continueCalculating',
//         message: chalk.cyan('Do you want to perform another calculation?'),
//         default: true,
//       },
//     ]);
//     continueLoop = continueAnswer.continueCalculating;
//   }
//   console.log(chalk.green.bold('\nThank you for using the calculator! Goodbye!\n'));
// };
// calculator();
// let dataTypes: any;
// dataTypes =  "Hello, TypeScript!";
// dataTypes = 42;
// // name = "TypeScript Module System";
// console.log(dataTypes);
let student = {
    name: "Ali",
    age: 21,
};
export {};
