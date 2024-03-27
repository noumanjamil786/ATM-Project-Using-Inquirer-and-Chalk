#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let myBalance = 10000;
let myPincode = 12345;

let PinAnswer = await inquirer.prompt([
        {
         name : "pin",
         type : "number",
         message : "Enter Your Pin"
        },
]); 
  if (PinAnswer.pin === myPincode){
    console.log(chalk.bgBlueBright("Correct Pin Code!"));
    console.log(chalk.yellow.bold("Welcome To Our ATM Services"));
 
   let answerOperation = await inquirer.prompt([{

          name : "operation",
          type : "list",
          message : "Chose Your Action To Perform",
          choices : ["Withdraw","Check balance","Fast Cash"]

  }]);
  if (answerOperation.operation === "Withdraw"){   // Performing Widthdraw Actions

     let answerWithdraw = await inquirer.prompt([{

        name : "amount",
        type : "number",
        message : "Enter Your Amount",

 }]); 
      if(answerWithdraw.amount <= myBalance){         // Performing Action Excceding Amount & Remaining Balance
      let RemaiBalance = myBalance -= answerWithdraw.amount;

      console.log(chalk.bgGreen.bold(`Your Remaining Balance is: ${myBalance}$`));
  } else {
    console.log(chalk.red.bold(`Insufficient Balance`));
  }
    
  } 
  else if (answerOperation.operation === "Check balance"){    // Check Balance Actions
        console.log(chalk.bgGreen.bold(`Your Remaining Balance is: ${myBalance}$`));
  }
   else if (answerOperation.operation === "Fast Cash"){       // Fast Cash Actions
    let fastCash = await inquirer.prompt([{

        name : "fastcash",
        type : "list",
        message : "Select Your Amount",
        choices :["1000","3000","5000","7000","10000"] 

 }]);
      myBalance -= fastCash.fastcash;  // Performing Action With Templete Use Remaining Balance
      console.log(chalk.bgGreen.bold(`Your Remaining Balance is: ${myBalance}$`));

   }  
     
}else {
    console.log(chalk.red.bold("Incorrect Pin Code!"));
  }


