import gameEngine, { getRandom } from '..';

const CONDITION = 'What number is missing in the progression?';

const round = () => {
  const startNumber = getRandom(1, 20);
  const step = getRandom(1, 10);
  const progressionLength = getRandom(5, 10) - 1;
  const questionIndex = getRandom(0, progressionLength);
  const replacer = '..';

  const progression = [];
  let correctAnswer;
  let item = startNumber;
  for (let position = 0; position <= progressionLength; position += 1, item += step) {
    if (position === questionIndex) {
      correctAnswer = item;
      progression.push(replacer);
    } else {
      progression.push(item);
    }
  }

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  gameEngine(CONDITION, round);
};
