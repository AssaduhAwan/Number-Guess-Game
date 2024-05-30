#!/usr/bin/env node

import inquirer  from "inquirer";
import chalk from  "chalk";



let score : number= 0;

async function startloop() {
       let again ;
  do{
         await guessNumber();
         again = await inquirer.prompt([
       {
         type:"list",
         name:"restart",
         choices:["yes","NO"],
         message:chalk.green("Do you want to contiune :")
       }
    ]);
  }while(again.restart==="yes")
};
startloop();

async function guessNumber() {
  let guessNum = Math.floor(Math.random()*10);
  let tip ;
  if(guessNum%2==0){
    tip = (chalk.blue(`Tip: Number is even.`));
  }else{
    tip = (chalk.green(`Tip: Number is odd.`));
}
const answer = await inquirer.prompt([
  {
    type:"number",
    name:"userguess",
    message:chalk.yellow(`Guess a number between 1 to 10 (${tip}) `)
  }
]);
   console.log(chalk.blue(`Your guess ?.${answer.userguess} and system generates ${guessNum}`));
   if(answer.userguess===guessNum){
     score ++;
     console.log(chalk.cyanBright(`congralulations your answer is correct.Your score is:${score}`));
   }else{
    console.log(chalk.red(`Wrong guess ? Your score is  ${score}.butter luck nexttime.`));
   }
};
