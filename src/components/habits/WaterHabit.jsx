import HabitCard from '../HabitCard'

export default function WaterHabit({ value, goal, onAdd }) {
    return (
        <HabitCard title="💧 Água" color="#4da6ff">
            <p>{value} ml / {goal} ml</p>
            <button onClick={() => onAdd(200)}>+200 ml</button>
        </HabitCard>
    )
}