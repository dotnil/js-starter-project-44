import readlineSync from 'readline-sync';
import getName from '../cli.js';
import generateAndVerifyInput from '../index.js';
import makeRandomNum from '../make-random-num.js';

const calculateGreatestCommonDivisor = (firstNum, secondNum) => {
  const min = Math.min(firstNum, secondNum);
  const arr = [...Array(min)].map((_, i) => min - i);

  return arr.find((num) => secondNum % num === 0 && firstNum % num === 0);
};

const generateState = () => {
  const firstNum = makeRandomNum(1, 100);
  const secondNum = makeRandomNum(1, 100);
  const state = calculateGreatestCommonDivisor(firstNum, secondNum);

  const input = Number(readlineSync.question(`Question: ${firstNum} ${secondNum}\nYour answer: `));

  return [state, input];
};

export default () => {
  const username = getName();
  console.log('Find the greatest common divisor of given numbers.');
  generateAndVerifyInput(generateState, username, 0);
};
