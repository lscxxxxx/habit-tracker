import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import HabitDashboard from './components/HabitDashboard'
import DataInfo from './components/DataInfo'

function App() {
  const [date] = useState(new Date())

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

  return (
    <>
      <Header />
      <DataInfo date={date} />
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
      />
    </>
  )
}

export default App