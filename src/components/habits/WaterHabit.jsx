export default function WaterHabit({ value, goal, onAdd }) {
    return (
        <div>
            <h3>Água</h3>
            <p>{value} ml / {goal} ml</p>
            <button onClick={() => onAdd(200)}>+200 ml</button>
        </div>
    )
}