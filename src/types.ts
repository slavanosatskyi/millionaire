export enum OptionStatus {
  INACTIVE,
  SELECTED,
  WRONG,
  CORRECT,
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
