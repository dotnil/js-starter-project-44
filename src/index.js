const winCounter = 3;

const generateAndVerifyInput = (generateState, username, counter) => {
  const [state, input] = generateState();

  if (state !== input) {
    console.log(`'${input}' is wrong answer ;(. Correct answer was '${state}'.`);
    return console.log(`Let's try again, ${username}!`);
  }

  const newCounter = counter + 1;
  console.log('Correct!');

  if (newCounter === winCounter) return console.log(`Congratulations, ${username}!`);
  return generateAndVerifyInput(generateState, username, newCounter);
};

export default generateAndVerifyInput;
