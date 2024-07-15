import readlineSync from 'readline-sync';
import getName from '../cli.js';
import generateAndVerifyInput from '../index.js';
import makeRandomNum from '../make-random-num.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;

  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateState = () => {
  const num = makeRandomNum(0, 100);
  const state = isPrime(num) ? 'yes' : 'no';
  const input = readlineSync.question(`Question: ${num}\n`);

  return [state, input];
};

export default () => {
  const username = getName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  generateAndVerifyInput(generateState, username, 0);
};
