import gameEngine, { getRandom } from '../index.js';

const CONDITION = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  if (num2 === 0) {
    return num1;
  }
  return num1 > num2 ? gcd(num2, num1 % num2) : gcd(num1, num2 % num1);
};

const round = () => {
  const number1 = getRandom(0, 100);
  const number2 = getRandom(0, 100);
  const question = `${number1} ${number2}`;

  return [question, gcd(number1, number2).toString()];
};

export default () => {
  gameEngine(CONDITION, round);
};
