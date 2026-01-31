import { useState } from 'react'
import Card from '../ui/Card'

export default function ExerciseHabit({ data, goal, onAdd }) {
    const [activity, setActivity] = useState('')
    const [minutes, setMinutes] = useState('')
    const handleAdd = () => {
        if (!activity || !minutes) return
        onAdd(activity, Number(minutes))
        setActivity('')
        setMinutes('')
    }

    return (
        <Card title="🏃 Atividade Física">
            <p>{ data.totalMinutes } min / { goal } min</p>
            <input placeholder="Atividade" value={activity} onChange={e => setActivity(e.target.value)}/>
            <input placeholder="Minutos" value={minutes} onChange={e => setMinutes(e.target.value)}/>
            <button onClick={handleAdd}>Adicionar</button>
            <ul>
                { data.activities.map((item, index) => (
                    <li key={ index }>{ item.name } – { item.minutes } min</li>
                )) }
            </ul>
        </Card>
    );
}