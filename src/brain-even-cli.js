import readlineSync from 'readline-sync';

const getName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  return username;
};

const randomNum = () => {
  const min = 0;
  const max = 100;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isCorrectGuess = (num, answer) => {
  const isEven = num % 2 === 0;
  return answer === isEven;
};

const stringifyBoolean = (boolean) => {
  if (boolean) return 'yes';
  return 'no';
};

const generateAndVerifyNumber = (username, counter) => {
  const num = randomNum();
  const answer = readlineSync.question(`Question: ${num}\n`, {
    trueValue: ['yes'],
    falseValue: ['no'],
  });

  if (isCorrectGuess(num, answer)) {
    const newCounter = counter + 1;
    console.log('Correct!');

    if (newCounter === 3) return console.log(`Congratulations, ${username}!`);
    return generateAndVerifyNumber(username, newCounter);
  }

  return console.log(`'${stringifyBoolean(answer)}' is wrong answer ;(. Correct answer was '${stringifyBoolean(!answer)}'.\nLet's try again, ${username}!`);
};

export default () => {
  const username = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  generateAndVerifyNumber(username, 0);
};
