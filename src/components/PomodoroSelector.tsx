
import React from 'react';
import { pomodoroSettings, PomodoroType } from '../pomodoroConfig';

interface PomodoroSelectorProps {
  onSelect: (type: PomodoroType, typeName: string) => void;
}

const PomodoroSelector: React.FC<PomodoroSelectorProps> = ({ onSelect }) => {
  const handleSelect = (key: string) => {
    onSelect(pomodoroSettings[key], key);
  };

  return (
    <div>
      <h2>Select the Pomo Type:</h2>
      {Object.keys(pomodoroSettings).map((key) => (
        <button key={key} onClick={() => handleSelect(key)}>
          Pomo {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default PomodoroSelector;
