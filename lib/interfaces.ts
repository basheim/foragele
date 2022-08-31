import { LossReason } from "./enums";

export interface Answer {
  id: string;
  name: string;
  region: string;
  edibility: string;
  mostNotableFeature: string;
  imageUrl: string;
};

export interface GameInfo {
  isWinner: boolean;
  lossReason: LossReason | undefined;
  correctAnswer: Answer;
  timeRemaining: number;
  guessesRemaining: number;
};