import gameEngine, { getRandom } from '../index.js';

const CONDITION = 'What is the result of the expression?';

const round = () => {
  const number1 = getRandom(0, 100);
  const number2 = getRandom(0, 100);
  const randomOperator = getRandom(1, 3);

  let operator;
  let correctAnswer;
  switch (randomOperator) {
    case 1:
      operator = '+';
      correctAnswer = number1 + number2;
      break;
    case 2:
      operator = '-';
      correctAnswer = number1 - number2;
      break;
    default:
      operator = '*';
      correctAnswer = number1 * number2;
  }

  const question = `${number1} ${operator} ${number2}`;

  return [question, correctAnswer];
};

export default () => {
  gameEngine(CONDITION, round);
};
