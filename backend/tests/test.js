// calculator.test.js

// Import the Calculator class and services
const Calculator = require('../src/components/Calculator'); // Adjust the path if needed
const { validatePassword } = require('../src/services/password-service'); // No change needed for password-service

describe('Calculator Service', () => {
  let calculator;

  // Initialize a new instance of Calculator before each test
  beforeEach(() => {
    calculator = new Calculator();
  });

  // Basic arithmetic tests
  it('should return 4 for 2+2', () => {
    expect(calculator.evaluateExpression('2+2')).toBe(4);
  });

  it('should return 0 for 2-2', () => {
    expect(calculator.evaluateExpression('2-2')).toBe(0);
  });

  it('should return 4 for 2*2', () => {
    expect(calculator.evaluateExpression('2*2')).toBe(4);
  });

  it('should return 2 for 4/2', () => {
    expect(calculator.evaluateExpression('4/2')).toBe(2);
  });

  it('should throw error for division by zero', () => {
    expect(() => calculator.evaluateExpression('10/0')).toThrow('Division by zero is not allowed');
  });

  it('should return 1 for 5%2', () => {
    expect(calculator.evaluateExpression('5%2')).toBe(1);
  });

  it('should return 16 for 4**2', () => {
    expect(calculator.evaluateExpression('4**2')).toBe(16);
  });

  it('should return 10 for (2+3)*2', () => {
    expect(calculator.evaluateExpression('(2+3)*2')).toBe(10);
  });

  it('should return -1 for -1+0', () => {
    expect(calculator.evaluateExpression('-1+0')).toBe(-1);
  });

  it('should return 3.5 for 7/2', () => {
    expect(calculator.evaluateExpression('7/2')).toBe(3.5);
  });

  it('should handle decimal calculations correctly for 2.5*2', () => {
    expect(calculator.evaluateExpression('2.5*2')).toBe(5);
  });

  it('should handle negative number calculations for -3+7', () => {
    expect(calculator.evaluateExpression('-3+7')).toBe(4);
  });

  it('should handle multiple operator expressions correctly for 3+5*2', () => {
    expect(calculator.evaluateExpression('3+5*2')).toBe(13); // Ensures multiplication precedes addition.
  });

  it('should handle complex expressions with all operators for 3*(2+5)-10/2', () => {
    expect(calculator.evaluateExpression('3*(2+5)-10/2')).toBe(16);
  });
});

// Password validation tests remain unchanged
describe('Password Validation Service', () => {
  it('should resolve when the correct password is provided', async () => {
    const response = await validatePassword('3838');
    expect(response.success).toBe(true);
    expect(response.message).toBe('Password validated successfully!');
  });

  it('should reject when an incorrect password is provided', async () => {
    try {
      await validatePassword('wrong_password');
    } catch (error) {
      expect(error.success).toBe(false);
      expect(error.message).toBe('Invalid password.');
    }
  });

  it('should handle promise rejection with invalid password using .rejects', async () => {
    await expect(validatePassword('wrong_password')).rejects.toEqual({
      success: false,
      message: 'Invalid password.',
    });
  });

  it('should handle promise resolution with valid password using .resolves', async () => {
    await expect(validatePassword('3838')).resolves.toEqual({
      success: true,
      message: 'Password validated successfully!',
    });
  });
});
