// create a simple calculator with typescript 
import inquirer from 'inquirer';
const calculator = async () => {
    const question = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstNumber',
            message: 'Enter the first number: ',
        },
        {
            type: 'input',
            name: 'secondNumber',
            message: 'Enter the second number: ',
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Choose an operation: ',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Square', 'Square root'],
        }
    ]);
    const firstNumber = parseInt(question.firstNumber);
    const secondNumber = parseInt(question.secondNumber);
    const operation = question.operation;
    if (operation === 'Addition') {
        console.log(`the result is : ${firstNumber + secondNumber}`);
    }
    else if (operation === 'Subtraction') {
        console.log(`the result is : ${firstNumber - secondNumber}`);
    }
    else if (operation === 'Multiplication') {
        console.log(`the result is : ${firstNumber * secondNumber}`);
    }
    else if (operation === 'Division') {
        console.log(`the result is : ${firstNumber / secondNumber}`);
    }
    else if (operation === 'Square') {
        console.log('the result of firt number is : ' + firstNumber * firstNumber);
        console.log('the result of second number is : ' + secondNumber ** 2);
    }
    else if (operation === 'Square roor') {
        console.log(`the result of first number is : ${Math.sqrt(firstNumber)}`);
        console.log(`the result of second number is : ${Math.sqrt(secondNumber)}`);
    }
    else {
        console.log('Invalid operation');
    }
};
calculator();
export default calculator;
