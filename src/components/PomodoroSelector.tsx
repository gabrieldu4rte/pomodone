import type React from "react"
import { pomodoroSettings, type PomodoroType } from "../pomodoroConfig"

interface PomodoroSelectorProps {
  onSelect: (type: PomodoroType, typeName: string) => void
}

const PomodoroSelector: React.FC<PomodoroSelectorProps> = ({ onSelect }) => {
  const handleSelect = (key: string) => {
    onSelect(pomodoroSettings[key], key)
  }

  const getButtonStyle = (key: string) => {
    const styles = {
      light: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      mid: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      classic: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      hardcore: "from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700",
    }
    return styles[key as keyof typeof styles] || styles.classic
  }

  const getIcon = (key: string) => {
    const icons = {
      classic: "🍅",
      light: "⚡",
      mid: "⏰",
      hardcore: "🤖",
    }
    return icons[key as keyof typeof icons] || "🍅"
  }

  const getDescription = (key: string) => {
    const config = pomodoroSettings[key]
    return `${config.workDuration}min work, ${config.shortBreak}min break`
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-rose-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Choose Your Pomodoro Style</h2>
        <p className="text-gray-600">Select the perfect timing for your productivity session</p>
      </div>

      <div className="space-y-4">
        {Object.keys(pomodoroSettings).map((key) => (
          <button
            key={key}
            onClick={() => handleSelect(key)}
            className={`w-full p-4 md:p-6 rounded-xl bg-gradient-to-r ${getButtonStyle(key)} 
              text-white font-semibold text-lg transition-all duration-300 
              transform hover:scale-105 hover:shadow-lg active:scale-95
              flex items-center justify-between group`}
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{getIcon(key)}</span>
              <div className="text-left">
                <div className="font-bold">Pomo {key.charAt(0).toUpperCase() + key.slice(1)}</div>
                <div className="text-sm opacity-90">{getDescription(key)}</div>
              </div>
            </div>
            <div className="transform group-hover:translate-x-1 transition-transform">→</div>
          </button>
        ))}
      </div>

      <div className="mt-8 p-4 bg-rose-50 rounded-xl border border-rose-200">
        <p className="text-sm text-rose-700 text-center">
          💡 <strong>Tip:</strong> The Pomodoro Technique helps you stay focused by breaking work into intervals
        </p>
      </div>
    </div>
  )
}

export default PomodoroSelector
