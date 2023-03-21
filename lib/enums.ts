export enum GameState {
  Start,
  Game,
  End
}

export enum LossReason {
  Timeout,
  IncorrectGuesses
}

export enum STATUS_CODES {
  SUCCESS = 200,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401
}