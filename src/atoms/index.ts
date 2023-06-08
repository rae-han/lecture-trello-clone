import { atom, selector } from "recoil";

export const minuteState = atom<number>({
  key: "minutes",
  default: 60,
});

export const hourSelector = selector<number>({
  // default value가 없기 때문에 unknown이 생길 수 있다.
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    console.log(newValue);
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
