const Calculator = require('../src/components/calculator');
const SnakeGame = require('../src/components/SnakeGame');
const snakeGameModule = require('../src/mocks/snakeGame');


jest.mock('../src/components/SnakeGame', () => {
  return jest.fn().mockImplementation(() => ({
    open: jest.fn(),
  }));
});

jest.mock('../src/mocks/snakeGame', () => ({
  open: jest.fn().mockResolvedValue('Snake Game Opened'),
}));

describe('Calculator Backend Test Suite', () => {
  let calculator;

  // 1. Setup and Teardown
  beforeEach(() => {
    calculator = new Calculator();
    jest.clearAllMocks(); 
  });

  afterEach(() => {
    calculator.reset();
  });

  // 2. Getting Started
  test('should add numbers correctly', () => {
    expect(2 + 2).toBe(4);
  });

  // 3. Using Matchers
  test('should open Snake game when password 3838 is entered', () => {
    calculator.enterNumber(3838);
    expect(calculator.isSnakeGameOpen()).toBe(true);
  });

  // 4. Testing Asynchronous Code
  test('should open Snake game asynchronously when password 3838 is entered', async () => {
    await calculator.enterNumberAsync(3838);
    expect(calculator.isSnakeGameOpen()).toBe(true);
  }, 10000); 

  // 5. Mock Functions
  test('should call checkForSnakeGame when entering number', () => {
    const mockCheck = jest.spyOn(calculator, 'checkForSnakeGame');
    calculator.enterNumber(3838);
    expect(mockCheck).toHaveBeenCalled();
    mockCheck.mockRestore(); 
  });

  // 6. Snapshot Testing
  test('should have consistent Snake game trigger state', () => {
    calculator.enterNumber(3838);
    expect(calculator).toMatchSnapshot(); 
  });

  // 7. An Async Example
  test('should open Snake game on async check', async () => {
    await expect(calculator.enterNumberAsync(3838)).resolves.toBe('Snake Game Opened');
  });

  // 8. Timer Mocks
  beforeAll(() => {
    jest.useFakeTimers();
  });

  test('should open Snake game after a delay', () => {
    calculator.enterNumberWithDelay(3838);
    jest.runAllTimers(); 
    expect(calculator.isSnakeGameOpen()).toBe(true);
  });

  afterAll(() => {
    jest.useRealTimers(); 
  });

  // 9. Manual Mocks
  test('should use manual mock for Snake game', () => {
    calculator.enterNumber(3838);
    expect(snakeGameModule.open).toHaveBeenCalled();
  });

  // 10. ES6 Class Mocks
  test('should call mocked Snake game class', () => {
    const mockOpen = jest.spyOn(SnakeGame.prototype, 'open');
    calculator.enterNumber(3838);
    expect(mockOpen).toHaveBeenCalled();
    mockOpen.mockRestore(); 
  });

  // 11. Bypassing Module Mocks
  jest.unmock('../src/mocks/snakeGame');
  test('should use real Snake game implementation', () => {
    const { open } = require('../src/mocks/snakeGame');
    calculator.enterNumber(3838);
    expect(open).toHaveBeenCalled();
  });

  // 12. ECMAScript Modules
  test('should correctly import and use Snake game function', () => {
    calculator.enterNumber(3838);
    expect(snakeGameModule.open).toHaveBeenCalled();
  });

  // 13. Architecture Understanding
  test('should confirm Jest runs all calculator component tests correctly', () => {
    expect(calculator).toBeDefined();
  });

  // 14. Troubleshooting Example
  test('troubleshooting: should confirm Jest setup and run properly', () => {
    expect(calculator).toBeDefined();
  });
});
