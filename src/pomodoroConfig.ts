
export type PomodoroType = {
  workDuration: number;
  shortBreak: number;
  longBreak: number;
  cycles: number;
};

export const pomodoroSettings: { [key: string]: PomodoroType } = {
  lite: { workDuration: 5, shortBreak: 2, longBreak: 10, cycles: 4 },
  mid: { workDuration: 10, shortBreak: 5, longBreak: 15, cycles: 4 },
  standard: { workDuration: 25, shortBreak: 5, longBreak: 30, cycles: 4 },
};
