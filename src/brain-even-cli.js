import readlineSync from 'readline-sync';

// let counter = 0;

const randomNum = () => {
  const min = 0;
  const max = 100;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const greeting = () => {
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}!`);

  return userName;
};

const isCorrectGuess = (num, answer) => {
  const isEven = num % 2 === 0
  return answer === isEven;
};

const generateAndVerifyNumber = (userName, counter) => {
  const num = randomNum();
  const answer = readlineSync.question(`guess ${num}\n`, {
    trueValue: ['yes'],
    falseValue: ['no'],
  });


  if (isCorrectGuess(num, answer)) {
    const newCounter = counter + 1
    console.log(newCounter);
    if (newCounter === 3) return console.log('win');
    return generateAndVerifyNumber(userName, newCounter);
  }

  console.log(0);
  return generateAndVerifyNumber(userName, 0);
};

export default () => {
  const userName = greeting();
  generateAndVerifyNumber(userName, 0);
};
