// snakeGame.js

class SnakeGame {
    constructor() {
      this.isGameOpen = false;
    }
  
    open() {
      this.isGameOpen = true;
      console.log('Snake Game Opened!'); 
      return 'Snake Game Opened';
    }
  
    isOpen() {
      return this.isGameOpen;
    }
  
  }
  
  module.exports = SnakeGame;
  