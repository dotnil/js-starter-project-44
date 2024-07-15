const winCounter = 3;

const generateAndVerifyInput = (generateState, username, counter) => {
  let counterIncrement = counter;

  while (counterIncrement < winCounter) {
    const [state, input] = generateState();

    if (state !== input) {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${state}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }

    counterIncrement += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};

export default generateAndVerifyInput;
