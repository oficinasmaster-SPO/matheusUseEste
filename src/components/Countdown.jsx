import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function getTargetDate() {
  const now = new Date()
  const target = new Date(now)
  target.setDate(target.getDate() + 3)
  target.setHours(23, 59, 59, 0)
  return target
}

const TARGET = getTargetDate()

export default function Countdown() {
  const [time, setTime] = useState(calcTime())

  function calcTime() {
    const diff = Math.max(0, TARGET - new Date())
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    }
  }

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime()), 1000)
    return () => clearInterval(id)
  }, [])

  const blocks = [
    { value: time.days, label: 'Dias' },
    { value: time.hours, label: 'Horas' },
    { value: time.minutes, label: 'Min' },
    { value: time.seconds, label: 'Seg' },
  ]

  return (
    <div className="flex items-center gap-3">
      {blocks.map((b, i) => (
        <div key={b.label} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <motion.div
              key={b.value}
              initial={{ scale: 1.1, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-dark text-white w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center text-2xl sm:text-3xl font-bold tabular-nums"
            >
              {String(b.value).padStart(2, '0')}
            </motion.div>
            <span className="text-xs text-gray-text mt-1.5 uppercase tracking-widest">
              {b.label}
            </span>
          </div>
          {i < blocks.length - 1 && (
            <span className="text-2xl font-bold text-brand mb-5">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
