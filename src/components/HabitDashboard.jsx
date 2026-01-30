import AchievementHabit from './habits/AchievementHabit'
import ExerciseHabit from './habits/ExerciseHabit'
import MedicineHabit from './habits/MedicineHabit'
import SleepHabit from './habits/SleepHabit'
import ToDoHabit from './habits/ToDoHabit'
import WaterHabit from './habits/WaterHabit'

export default function HabitDashboard({ water, waterGoal, onAddWater}) {
    return (
        <div>
            <h2>Hábitos do Dia</h2>
            <WaterHabit 
                value={water}
                goal={waterGoal}
                onAdd={onAddWater}
            />
            <ExerciseHabit />
            <MedicineHabit />
            <SleepHabit />
            <ToDoHabit />
            <AchievementHabit />
        </div>
    );
}