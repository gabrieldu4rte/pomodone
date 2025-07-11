
import React, { useState } from 'react';
import PomodoroSelector from './components/PomodoroSelector';
import PomodoroTimer from './components/PomodoroTimer';
import { PomodoroType } from './pomodoroConfig';

const App: React.FC = () => {
  const [selectedConfig, setSelectedConfig] = useState<PomodoroType | null>(null);
  const [typeName, setTypeName] = useState<string>('');

  const handleSelection = (config: PomodoroType, name: string) => {
    setSelectedConfig(config);
    setTypeName(name);
  };

  const resetSelection = () => {
    setSelectedConfig(null);
    setTypeName('');
  };

  return (
    <div className="App">
      <header>
        <h1>PomoDone</h1>
      </header>
      <main>
        {!selectedConfig ? (
          <PomodoroSelector onSelect={handleSelection} />
        ) : (
          <PomodoroTimer
            config={selectedConfig}
            onResetSelection={resetSelection}
            typeName={typeName}
          />
        )}
      </main>
      <footer>
        <p>© 2025 PomoDone. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
