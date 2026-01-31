import { useState } from 'react'
import HabitCard from '../HabitCard'

export default function SleepHabit({ value, goal, onUpdate }) {
    const [hours, setHours] = useState(value)
    return (
        <HabitCard title="😴 Sono" color="#9575cd">
            <p>{value} h / {goal} h</p>
            <input type="number" step="0.5" min="0" max="24" value={hours} onChange={e => setHours(e.target.value)}/>
            <button onClick={() => onUpdate(Number(hours))}>Registrar sono</button>
        </HabitCard>
    )
}