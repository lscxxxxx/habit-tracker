import { useState } from 'react'
import Card from '../ui/Card'

export default function MedicineHabit({ medicines, onAdd, onToggle }) {
    const [name, setName] = useState('')
    const [time, setTime] = useState('')
    const suggestions = [...new Set(medicines.map(m => m.name))]
    const handleAdd = () => {
        if (!name || !time) return
        onAdd(name, time)
        setTime('')
        setName('')
    }

    return (
        <Card title="💊 Medicamentos">
            <input list="medicine-suggestions" placeholder="Medicamento" value={name} onChange={e => setName(e.target.value)} />
            <datalist id="medicine-suggestions">
                {suggestions.map((s, i) => (
                    <option key={i} value={s} />
                ))}
            </datalist>
            <input type="time" value={time} onChange={e => setTime(e.target.value)} />
            <button onClick={handleAdd}>Registrar medicamento</button>
            <ul>
                {[...medicines].sort((a, b) => a.time.localeCompare(b.time)).map((med, index) => (
                    <li key={index}>
                        <label><input type="checkbox" checked={med.taken} onChange={() => onToggle(index)}/>{med.name} — {med.time}</label>
                    </li>
                ))}
            </ul>
        </Card>
    )
}