import { atom } from 'recoil';

export const toDoState = atom({
  key: 'toDo',
  default: ['a', 'b', 'c', 'd', 'e', 'f'],
});

export interface ToDo {
  id: number;
  text: string;
}

interface DataState {
  [key: string]: ToDo[];
}

export const dataState = atom<DataState>({
  key: 'data',
  default: {
    'To Do': [],
    Doing: [],
    Done: [],
  },
});
