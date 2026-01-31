import { useState } from 'react'
import DataInfo from './DataInfo'

export default function Header() {
    const [date] = useState(new Date())

    return (
        <div>
            <h1>Habit Tracker</h1>
            <p>Organize e acompanhe seus hábitos saudáveis diários</p>
            <DataInfo date={date} />
        </div>
    );
}