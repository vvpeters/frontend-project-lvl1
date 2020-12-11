import gameEngine, { getRandom } from '../index.js';

const CONDITION = 'What number is missing in the progression?';

const round = () => {
  const start = getRandom(1, 20);
  const step = getRandom(1, 10);
  const length = getRandom(5, 10);
  const questionPosition = getRandom(..., ...);

  const getProgression = () => {
    const progresion = [];
    for (let i = 0, let progression[i] = start; i < length - 1; i += 1, progression[i] += step) {
     progresion.push([i]);
    }
    return progression;


  const question = `${number1} ${operator} ${number2}`;

  return [question, correctAnswer.toString()];
};

export default () => {
  gameEngine(CONDITION, round);
};
