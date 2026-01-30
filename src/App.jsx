import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import HabitDashboard from './components/HabitDashboard'
import DataInfo from './components/DataInfo'

function App() {
  const [date] = useState(new Date())
  const [water, setWater] = useState(0)
  const waterGoal = 2000

  return (
    <>
      <Header />
      <DataInfo date={date} />
      <HabitDashboard 
        water={water}
        waterGoal={waterGoal}
        onAddWater={(amount) => setWater(water + amount)}
      />
    </>
  )
}

export default App