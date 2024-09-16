// calculate-service.js

const Calculator = require('./Calculator'); 
const calculator = new Calculator(); 

module.exports = {
  evaluateExpression: (expression) => calculator.evaluateExpression(expression),
};
