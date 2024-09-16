// index.js
const express = require('express');
const app = express();
const port = 3000;


const Calculator = require('../src/components/calculator');
const { validatePassword } = require('./services/password-service'); 

const calculator = new Calculator();

app.use(express.json());

app.post('/calculate', (req, res) => {
  const { expression } = req.body;

  try {

    const result = calculator.evaluateExpression(expression);
    res.json({ result: result.toString() });
  } catch (error) {
    console.error(`Error calculating expression: ${expression}`, error); 
    res.status(400).json({ error: error.message || 'Error occurred during calculation' });
  }
});

app.post('/unlock-game', async (req, res) => {
  const { password } = req.body;

  try {
    const result = await validatePassword(password);
    res.status(200).json(result);
  } catch (error) {
    console.error('Password validation error:', error); 
    res.status(401).json({ error: error.message || 'Invalid password.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
