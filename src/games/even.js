import gameEngine, { getRandom } from '../index.js';

const CONDITION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const round = () => {
  const random = getRandom(0, 100);

  return [random.toString(), isEven(random)];
};

export default () => {
  gameEngine(CONDITION, round);
};
