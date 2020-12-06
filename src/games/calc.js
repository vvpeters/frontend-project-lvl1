import readlineSync from 'readline-sync';
import meet from '../cli.js';

const getRandom = () => Math.floor(Math.random() * 100);
const getRandomForOperators = () => Math.floor(Math.random() * 3) + 1;

export default () => {
  const name = meet();
  console.log('What is the result of the expression?');

  let count = 0;
  while (count < 3) {
    const nummer1 = getRandom();
    const nummer2 = getRandom();
    const randomOperator = getRandomForOperators();

    let operator;
    let correctAnswer;
    switch (randomOperator) {
      case 1:
        operator = '+';
        correctAnswer = nummer1 + nummer2;
        break;
      case 2:
        operator = '-';
        correctAnswer = nummer1 - nummer2;
        break;
      default:
        operator = '*';
        correctAnswer = nummer1 * nummer2;
    }
    console.log(`Question: ${nummer1} ${operator} ${nummer2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === Number(correctAnswer)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
