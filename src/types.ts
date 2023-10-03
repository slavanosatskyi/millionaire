export enum OptionStatus {
  INACTIVE,
  SELECTED,
  WRONG,
  CORRECT,
}

export enum QuestionStatus {
  NOT_STARTED,
  ACTIVE,
  ANSWERED,
}

export type Option = {
  id: string;
  value: string;
  status: OptionStatus;
};

export type Question = {
  question: string;
  answers: string[];
  options: Option[];
};
