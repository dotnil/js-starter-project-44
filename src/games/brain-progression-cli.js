import readlineSync from 'readline-sync';
import getName from '../cli.js';
import generateAndVerifyInput from '../index.js';

const progressionLength = 10;

const makeRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step) => [...Array(progressionLength)]
  .map((_, i) => start + step * i);

const maskProgression = (maskedIndex, progression) => progression.map((num, i) => {
  if (i === maskedIndex) return '..';
  return num;
}).join(' ');

const generateState = () => {
  const start = makeRandomNum(1, 15);
  const step = makeRandomNum(1, 10);
  const maskedIndex = makeRandomNum(0, 9);
  const progression = generateProgression(start, step);
  const maskedProgression = maskProgression(maskedIndex, progression);
  const state = progression[maskedIndex];

  const input = Number(readlineSync.question(`Question: ${maskedProgression}\nYour answer: `));

  return [state, input];
};

export default () => {
  const username = getName();
  console.log('What number is missing in the progression?');
  generateAndVerifyInput(generateState, username, 0);
};
