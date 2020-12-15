import gameEngine, { getRandom } from '..';

const CONDITION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const round = () => {
  const random = getRandom(0, 100);

  return [random, isEven(random)];
};

export default () => {
  gameEngine(CONDITION, round);
};
