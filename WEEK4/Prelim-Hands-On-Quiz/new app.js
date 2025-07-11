const calculation = require('./calculation.js');
//Initial Values
var hoursWorked = 4;
var hourlyRate = 300;
var daysperWeek = 6;
//Calculations
var grossIncome = calculation.multiply(calculation.multiply(hoursWorked,hourlyRate),daysperWeek);

//10% tax rate
var taxRate = calculation.multiply(0.1, grossIncome); 

var SSS = 1200;
var PAGIBIG = 300;
var PhilHealth = 400;

console.log("The gross income is", grossIncome);

console.log("Tax:", taxRate);
console.log("SSS:", SSS);
console.log("Pag-Ibig fund:", PAGIBIG);
console.log("PhilHealth:", PhilHealth);
// Add Tax, SSS, Pag-Ibig, and PhilHealth
console.log("Total deductions:", calculation.add(calculation.add(taxRate, SSS), calculation.add(PAGIBIG, PhilHealth)));
console.log("Net Salary:", calculation.subtract(grossIncome, calculation.add(calculation.add(taxRate, SSS), calculation.add(PAGIBIG, PhilHealth))));