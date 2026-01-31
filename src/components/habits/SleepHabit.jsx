import { useState } from 'react'
import Card from '../ui/Card'

export default function SleepHabit({ value, goal, onUpdate }) {
    const [hours, setHours] = useState(value)
    return (
        <Card title="😴 Sono">
            <p>{value} h / {goal} h</p>
            <input type="number" step="0.5" min="0" max="24" value={hours} onChange={e => setHours(e.target.value)}/>
            <button onClick={() => onUpdate(Number(hours))}>Registrar sono</button>
        </Card>
    )
}