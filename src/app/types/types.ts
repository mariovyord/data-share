export type TQuestionIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type TQuestion = {
  id: string;
  question: string;
  answers: [string, string, string, string];
};

export type TAnswer = { id: string, correct_answer: number };

export enum Status {
  PLAYING = "PLAYING",
  NEXT = "NEXT",
  GAME_OVER = "GAME_OVER"
}

export type TSelectedAnswer = 0 | 1 | 2 | 3;
