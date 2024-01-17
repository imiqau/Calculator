#!/usr/bin/env node
//console.log(chalk.blueBright.bgWhiteBright("BISMILLAH"))
import inquirer from 'inquirer';
import chalk from 'chalk';

let str = 'Yes';
while(str === 'Yes'){

let user = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: chalk.redBright.bgYellowBright.italic('Enter first number: ')
    },
    {
        type: 'number',
        name: 'num2',
        message: chalk.redBright.bgYellowBright.italic('Enter second number: ')
    },
    {
        type: 'list',
        name: 'mathop',
        message: chalk.redBright.bgYellowBright.italic('Math Operation Selected: '),
        choices: ['add','sub','div','mul','pow','remainder']
    }
])

//console.log(`${user.num1} ${user.mathop} ${user.num2}`)
let result = 0;
if(user.mathop === "add"){
    result = user.num1 + user.num2;
}else if(user.mathop === "sub"){
    result = user.num1 - user.num2;
}else if(user.mathop === "div"){
    result = user.num1 / user.num2;
}else if(user.mathop === "mul"){
    result = user.num1 * user.num2;
}else if(user.mathop === "pow"){
    result = user.num1 ** user.num2;
}else if(user.mathop === "remainder"){
    result = user.num1%user.num2;
}else{}
console.log(`result = ${chalk.bgCyanBright.blackBright.bold.underline(result)}`);

let input = await inquirer.prompt({
        type: 'list',
        name: 'again',
        message: chalk.magenta.bgBlue.bold('Do You want to perform another Calculation? '),
        choices: ['Yes','No']
})
str = input.again;
}