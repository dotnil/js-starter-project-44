import readlineSync from 'readline-sync';
import getName from '../cli.js';
import generateAndVerifyInput from '../index.js';
import makeRandomNum from '../make-random-num.js';

const evaluateExpression = (firstNum, operator, secondNum) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateState = () => {
  const operators = ['+', '-', '*'];
  const firstNum = makeRandomNum(0, 10);
  const secondNum = makeRandomNum(0, 10);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const state = evaluateExpression(firstNum, operator, secondNum);

  const input = Number(readlineSync.question(`Question: ${firstNum} ${operator} ${secondNum}\nYour answer: `));

  return [state, input];
};

export default () => {
  const username = getName();
  console.log('What is the result of the expression?');
  generateAndVerifyInput(generateState, username, 0);
};
