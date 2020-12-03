import readlineSync from 'readline-sync';
import meet from './cli.js';

const isEven = (num) => num % 2 === 0;
const getRandom = () => Math.floor(Math.random() * 100);

export default () => {
  const name = meet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;
  while (count < 3) {
    const random = getRandom();
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((isEven(random) === true && userAnswer === 'yes') || (isEven(random) === false && userAnswer === 'no')) {
      console.log('Correct!');
      count += 1;
    }
    if (isEven(random) === true && userAnswer !== 'yes') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (isEven(random) === false && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
