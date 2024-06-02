import readlineSync from 'readline-sync';
import getName from './cli.js';
import generateAndVerifyInput from './index.js';

const randomNum = () => {
  const min = 0;
  const max = 100;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEven = (num) => num % 2 === 0;

const stringifyBoolean = (boolean) => {
  if (boolean) return 'yes';
  return 'no';
};

const generateState = () => {
  const num = randomNum();
  const state = stringifyBoolean(isEven(num));
  const input = readlineSync.question(`Question: ${num}\n`);

  return [state, input];
};

export default () => {
  const username = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  generateAndVerifyInput(generateState, username, 0);
};
