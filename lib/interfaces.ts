import { LossReason } from "./enums";

export interface Answer {
  id: string;
  english: string;
  latin: string;
  region: string;
  edibility: string;
  mostNotableFeature: string;
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