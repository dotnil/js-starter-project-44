import readlineSync from 'readline-sync';

const getName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  return username;
};

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

const generateAndVerifyExpression = (username, counter) => {
  const firstNum = randomNum();
  const secondNum = randomNum();
  const operator = randomOperator();
  const result = evaluateExpression(firstNum, operator, secondNum);

  const answer = Number(readlineSync.question(`Question: ${firstNum} ${operator} ${secondNum}\nYour answer: `));

  if (result === answer) {
    const newCounter = counter + 1;
    console.log('Correct!');
    if (newCounter === 3) return console.log(`Congratulations, ${username}!`);
    // verifyResult(result, username, counter)
    return generateAndVerifyExpression(username, newCounter);
  }

  return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${username}!`);
};

export default () => {
  const username = getName();
  // const result = generateState()
  console.log('What is the result of the expression?');
  // verifyResult(result, username, counter)
  generateAndVerifyExpression(username, 0);
};
