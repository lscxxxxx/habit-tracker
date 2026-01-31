import Card from '../ui/Card'

export default function WaterHabit({ value, goal, onAdd }) {
    return (
        <Card title="💧 Água">
            <p>{value} ml / {goal} ml</p>
            <button onClick={() => onAdd(200)}>+200 ml</button>
        </Card>
    )
}