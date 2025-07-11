// src/components/PomodoroTimer.tsx

import React, { useState, useEffect } from 'react';
import { PomodoroType } from '../pomodoroConfig';

type Phase = 'work' | 'shortBreak' | 'longBreak';

interface PomodoroTimerProps {
  config: PomodoroType;
  onResetSelection: () => void;
  typeName: string;
}

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ config, onResetSelection, typeName }) => {
  const [phase, setPhase] = useState<Phase>('work');
  const [cycle, setCycle] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(config.workDuration * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (secondsLeft === 0) {
      if (phase === 'work') {
        if (cycle < config.cycles - 1) {
          setPhase('shortBreak');
          setSecondsLeft(config.shortBreak * 60);
        } else {
          setPhase('longBreak');
          setSecondsLeft(config.longBreak * 60);
        }
      } else {
        if (phase === 'longBreak') {
          setCycle(0);
        } else if (phase === 'shortBreak') {
          setCycle(cycle + 1);
        }
        setPhase('work');
        setSecondsLeft(config.workDuration * 60);
      }
    }
  }, [secondsLeft, phase, cycle, config]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setPhase('work');
    setCycle(0);
    setSecondsLeft(config.workDuration * 60);
  };

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Pomodoro {typeName.charAt(0).toUpperCase() + typeName.slice(1)}</h2>
      <p>
        Current Phase:{" "}
        {phase === 'work'
          ? "Work"
          : phase === 'shortBreak'
          ? "Short Break"
          : "Long Break"}
      </p>
      <p>Cicle: {cycle + 1} of {config.cycles}</p>
      <h1>{formatTime(secondsLeft)}</h1>
      <button onClick={toggleTimer}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={onResetSelection}>Change Pomo Type</button>
    </div>
  );
};

export default PomodoroTimer;
