import { LossReason } from "./enums";

export interface Answer {
  id: string;
  english: string;
  latin: string;
  foundNear: string;
  edibility: string;
  keyFeatures: string;
  poisonousLookAlike: string;
  imageUrl: string;
  start: Date;
  end: Date;
};

export interface GameInfo {
  isWinner: boolean;
  lossReason: LossReason | undefined;
  correctAnswer: Answer;
  timeRemaining: number;
  guessesRemaining: number;
};

export interface Nav {
  text: string;
  path: string;
}

export interface PreviewData {
  title: string;
  description: string;
  createdDate: Date;
  id: string;
  tag: string;
}

export interface PostData {
  title: string;
  createdDate: Date;
  id: string;
  content: string;
  author: string;
  description: string;
  tag: string;
}