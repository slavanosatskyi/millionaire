import _ from 'lodash';
import { Question } from 'types';

function validateQuestions(questions: Question[]) {
  if (!questions.length) {
    return ['No questions found in config'];
  }

  return questions.reduce<string[]>((errors, { id, answers, options }) => {
    if (!answers.length) {
      errors.push(`Question id=${id} has no answer (answer array is empty)`);
    }
    if (_.uniq(answers).length !== answers.length) {
      errors.push(`Question id=${id} has duplicates in answers`);
    }
    if (_.difference(answers, options.map(({ id: optionId }) => optionId)).length !== 0) {
      errors.push(`Question id=${id} doesn't have correct answer (some answer ids differ from option ids)`);
    }
    return errors;
  }, []);
}

export default validateQuestions;
