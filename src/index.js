import readlineSync from 'readline-sync';
import meet from './cli.js';

const ROUNDS = 3;

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default (condition, round) => {
  const name = meet();
  console.log(condition);

  let count = 0;
  while (count < ROUNDS) {
    const [question, correctAnswer] = round();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
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
