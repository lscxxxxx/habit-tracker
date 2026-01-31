import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import HabitDashboard from './components/HabitDashboard'

function App() {
  const [water, setWater] = useState(0)
  const waterGoal = 2000

  const [exercise, setExercise] = useState({ totalMinutes: 0, activities: [] })
  const exerciseGoal = 30
  const addExercise = (name, minutes) => {
    setExercise(prev => ({
      totalMinutes: prev.totalMinutes + minutes,
      activities: [
        ...prev.activities,
        { name, minutes }
      ]
    }))
  }

  const [sleep, setSleep] = useState(0)
  const sleepGoal = 8
  const updateSleep = (hours) => { setSleep(hours) }

  const [medicines, setMedicines] = useState([])
  const addMedicineDose = (name, time) => {
    setMedicines(prev => [
      ...prev,
      { name, time, taken: false }
    ])
  }
  const toggleMedicine = (index) => {
    setMedicines(prev =>
      prev.map((med, i) =>
        i === index ? { ...med, taken: !med.taken } : med
      )
    )
  }

  return (
    <>
      <Header />
      <HabitDashboard
        water={water}
        waterGoal={waterGoal}
        onAddWater={(amount) => setWater(water + amount)}

        exercise={exercise}
        exerciseGoal={exerciseGoal}
        onAddExercise={addExercise}

        sleep={sleep}
        sleepGoal={sleepGoal}
        onUpdateSleep={updateSleep}

        medicines={medicines}
        onAddMedicine={addMedicineDose}
        onToggleMedicine={toggleMedicine}
      />
    </>
  )
}

export default App