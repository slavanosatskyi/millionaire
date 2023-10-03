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

export enum AppStatus {
  NOT_STARTED,
  ACTIVE,
  FINISHED,
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

export type MenuItem = {
  id: string;
  status: QuestionStatus;
  value: string;
};
