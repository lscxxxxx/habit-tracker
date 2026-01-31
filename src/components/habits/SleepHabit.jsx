import { useState } from 'react'

export default function SleepHabit({ value, goal, onUpdate }) {
    const [hours, setHours] = useState(value)
    return (
        <div>
            <h3>Sono</h3>
            <p>{value} h / {goal} h</p>
            <input type="number" step="0.5" min="0" max="24" value={hours} onChange={e => setHours(e.target.value)}/>
            <button onClick={() => onUpdate(Number(hours))}>Registrar sono</button>
        </div>
    )
}