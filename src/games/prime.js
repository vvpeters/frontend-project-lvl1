import gameEngine, { getRandom } from '../index.js';

const CONDITION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const max = num / 2;

  for (let i = 2; i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const round = () => {
  const question = getRandom(2, 100);

  return [question, isPrime(question) ? 'yes' : 'no'];
};

export default () => {
  gameEngine(CONDITION, round);
};
