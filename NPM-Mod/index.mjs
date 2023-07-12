import chalk from "chalk";
import validator from 'validator';

console.log(chalk.blue("Hello world!"));


const res = validator.isEmail("adityavishal903@gmail.com");
console.log(res);

