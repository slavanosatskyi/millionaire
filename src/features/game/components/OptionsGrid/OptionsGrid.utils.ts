import { OptionStatus } from 'types';

function getOptionStatus(id: string, correctAnswers: string[], playerAnswers: string[]) {
  if (correctAnswers.length === playerAnswers.length) {
    if (correctAnswers.includes(id)) {
      return OptionStatus.CORRECT;
    } if (!correctAnswers.includes(id) && playerAnswers.includes(id)) {
      return OptionStatus.WRONG;
    }
  }

  if (playerAnswers.includes(id)) {
    return OptionStatus.SELECTED;
  }

  return OptionStatus.INACTIVE;
}

export default getOptionStatus;
