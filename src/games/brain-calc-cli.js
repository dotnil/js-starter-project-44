import readlineSync from 'readline-sync';
import getName from '../cli.js';
import generateAndVerifyInput from '../index.js';
import makeRandomNum from '../make-random-num.js';

const makeRandomOperator = () => {
  const operators = ['+', '-', '*'];

  return operators[Math.floor(Math.random() * operators.length)];
};

const evaluateExpression = (firstNum, operator, secondNum) => {
  if (operator === '+') { return firstNum + secondNum; }
  if (operator === '-') { return firstNum - secondNum; }

  return firstNum * secondNum;
};

const generateState = () => {
  const firstNum = makeRandomNum(0, 10);
  const secondNum = makeRandomNum(0, 10);
  const operator = makeRandomOperator();
  const state = evaluateExpression(firstNum, operator, secondNum);

  const input = Number(readlineSync.question(`Question: ${firstNum} ${operator} ${secondNum}\nYour answer: `));

  return [state, input];
};

export default () => {
  const username = getName();
  console.log('What is the result of the expression?');
  generateAndVerifyInput(generateState, username, 0);
};
