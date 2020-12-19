import gameEngine, { getRandom } from '../index.js';

const CONDITION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const round = () => {
  const random = getRandom(0, 100);
  const correctAnswer = isEven(random) === true ? 'yes' : 'no';

  return [random, correctAnswer];
};

export default () => {
  gameEngine(CONDITION, round);
};
