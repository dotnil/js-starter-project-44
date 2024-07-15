import readlineSync from 'readline-sync';
import getName from '../cli.js';
import generateAndVerifyInput from '../index.js';
import makeRandomNum from '../make-random-num.js';

const isEven = (num) => num % 2 === 0;

const generateState = () => {
  const num = makeRandomNum(0, 100);
  const state = isEven(num) ? 'yes' : 'no';
  const input = readlineSync.question(`Question: ${num}\n`);

  return [state, input];
};

export default () => {
  const username = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  generateAndVerifyInput(generateState, username, 0);
};
