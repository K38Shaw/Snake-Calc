// Calculator.js
const safeEval = require('safe-eval');

class Calculator {
  constructor() {
    this.currentInput = '';
    this.snakeGameOpen = false;
  }

  // Method to evaluate mathematical expressions
  evaluateExpression(expression) {
    if (!this.isValidExpression(expression)) {
      throw new Error('Invalid expression');
    }

    // Check for division by zero
    if (this.containsDivisionByZero(expression)) {
      throw new Error('Division by zero is not allowed');
    }

    // Perform the evaluation using safeEval
    return safeEval(expression);
  }

  // Method to enter a number and trigger the Snake game if password is correct
  enterNumber(number) {
    this.currentInput = number;
    this.checkForSnakeGame();
  }

  // Async version to enter a number and open Snake game asynchronously
  async enterNumberAsync(number) {
    this.currentInput = number;
    await this.checkForSnakeGameAsync();
    return this.snakeGameOpen ? 'Snake Game Opened' : 'Game Not Opened';
  }

  // Simulates entering a number with delay (used for timer mocks)
  enterNumberWithDelay(number) {
    setTimeout(() => {
      this.currentInput = number;
      this.checkForSnakeGame();
    }, 1000); // 1-second delay
  }

  // Method to check if the Snake game should open
  checkForSnakeGame() {
    if (this.currentInput === 3838) {
      this.openSnakeGame();
    }
  }

  // Async version of checking for Snake game
  async checkForSnakeGameAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.currentInput === 3838) {
          this.openSnakeGame();
        }
        resolve();
      }, 500); 
    });
  }

  // Simulate opening the Snake game
  openSnakeGame() {
    this.snakeGameOpen = true;
    console.log('Snake Game Opened!');
  }

  // Check if the Snake game is open
  isSnakeGameOpen() {
    return this.snakeGameOpen;
  }

  // Reset calculator state
  reset() {
    this.currentInput = '';
    this.snakeGameOpen = false;
  }

  // Validate input expressions
  isValidExpression(expression) {
    return expression && typeof expression === 'string' && expression.trim() !== '';
  }

  // Check if the expression contains division by zero
  containsDivisionByZero(expression) {
    return /\/\s*0/.test(expression);
  }
}

module.exports = Calculator;
