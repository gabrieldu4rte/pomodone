import type React from "react"
import { useState } from "react"
import PomodoroSelector from "./components/PomodoroSelector"
import PomodoroTimer from "./components/PomodoroTimer"
import type { PomodoroType } from "./pomodoroConfig"

const App: React.FC = () => {
  const [selectedConfig, setSelectedConfig] = useState<PomodoroType | null>(null)
  const [typeName, setTypeName] = useState<string>("")

  const handleSelection = (config: PomodoroType, name: string) => {
    setSelectedConfig(config)
    setTypeName(name)
  }

  const resetSelection = () => {
    setSelectedConfig(null)
    setTypeName("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-25 via-orange-25 to-blue-25 flex flex-col">
      <header className="bg-white/80 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            🍅 PomoDone
          </h1>
          <p className="text-center text-gray-600 mt-2 text-sm md:text-base">
            Boost your productivity with the Pomodoro Technique and get your tasks PomoDone!
          </p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          {!selectedConfig ? (
            <PomodoroSelector onSelect={handleSelection} />
          ) : (
            <PomodoroTimer config={selectedConfig} onResetSelection={resetSelection} typeName={typeName} />
          )}
        </div>
      </main>

      <footer className="bg-white/50 backdrop-blur-sm border-t border-rose-100 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">© 2025 PomoDone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
