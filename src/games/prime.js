import gameEngine, { getRandom } from '..';

const CONDITION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const round = () => {
  const question = getRandom(2, 100);

  return [question, isPrime(question)];
};

export default () => {
  gameEngine(CONDITION, round);
};
