export interface NoteProp {
  id: number;
  text: string;
  date: string;
  edited?: boolean;
}

export interface CreateNoteInterface {
  text: string;
}

export const initialValue: NoteProp[] = [
  {
    id: 1,
    text: "Change the Washroom state of likewise others NUMBER 1",
    date: new Date().toDateString(),
  },
  {
    id: 2,
    text: "Someone is watching me NUMBER 2",
    date: new Date().toDateString(),
  },
  {
    id: 3,
    text: "The cool weekly music to play, state of likewise others NUMBER 3.",
    date: new Date().toDateString(),
  },
  {
    id: 4,
    text: "Change the Washroom state of likewise others NUMBER 1",
    date: new Date().toDateString(),
  },
  {
    id: 5,
    text:
      "Someone is watching me. Washroom cool music discover others NUMBER 2",
    date: new Date().toDateString(),
  },
  {
    id: 6,
    text: "The cool weekly music to play, state of likewise others NUMBER 3.",
    date: new Date().toDateString(),
  },
];
