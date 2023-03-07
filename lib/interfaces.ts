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
  tags: string;
}

export interface PostData {
  title: string;
  createdDate: Date;
  id: string;
  content: string;
  author: string;
  description: string;
  tags: string;
  prev: string;
  next: string;
}

export interface PostPageData {
  post: PostData;
  previews: PreviewData[];
  data: string;
}

export interface ModalData {
  text: string;
  modalTitle: string;
  modalItems: string[];
}

export interface ModalLinkData {
  text: string;
  link: string;
}

export interface ProjectData {
  name: string;
  progress: number;
  state: string;
  link: string;
}