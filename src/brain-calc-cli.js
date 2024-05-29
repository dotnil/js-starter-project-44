import readlineSync from 'readline-sync';
import getName from './cli.js';
import generateAndVerifyInput from './index.js';

const randomNum = () => {
  const min = 0;
  const max = 10;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomOperator = () => {
  const operators = ['+', '-', '*'];

  return operators[Math.floor(Math.random() * operators.length)];
};

const evaluateExpression = (firstNum, operator, secondNum) => {
  if (operator === '+') { return firstNum + secondNum; }
  if (operator === '-') { return firstNum - secondNum; }

  return firstNum * secondNum;
};

const generateState = () => {
  const firstNum = randomNum();
  const secondNum = randomNum();
  const operator = randomOperator();
  const state = evaluateExpression(firstNum, operator, secondNum);

  const input = Number(readlineSync.question(`Question: ${firstNum} ${operator} ${secondNum}\nYour answer: `));

  return [state, input];
};

export default () => {
  const username = getName();
  console.log('What is the result of the expression?');
  generateAndVerifyInput(generateState, username, 0);
};
