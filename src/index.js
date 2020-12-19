import readlineSync from 'readline-sync';

const ROUNDS = 3;

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default (condition, round) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

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
