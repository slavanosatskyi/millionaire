export enum OptionStatus {
  INACTIVE,
  SELECTED,
  WRONG,
  CORRECT,
}

export enum AppStatus {
  NOT_STARTED,
  ACTIVE,
  FINISHED,
}

export type Option = {
  id: string;
  value: string;
};

export type MenuItem = {
  id: string;
  value: number;
};

export type Question = {
  id: string;
  question: string;
  value: number;
  answers: string[];
  options: Option[];
};
