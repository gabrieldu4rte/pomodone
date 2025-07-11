export interface PomodoroType {
  workDuration: number 
  shortBreak: number 
  longBreak: number 
  cycles: number
}

export const pomodoroSettings: Record<string, PomodoroType> = {
  light: {
    workDuration: 5,
    shortBreak: 2,
    longBreak: 10,
    cycles: 2,
  },
  mid: {
    workDuration: 10,
    shortBreak: 5,
    longBreak: 10,
    cycles: 3,
  },
  classic: {
    workDuration: 25,
    shortBreak: 5,
    longBreak: 15,
    cycles: 4,
  },
  hardcore: {
    workDuration: 50,
    shortBreak: 10,
    longBreak: 30,
    cycles: 4,
  },
}
