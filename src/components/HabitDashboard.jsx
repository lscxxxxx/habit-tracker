import AchievementHabit from './habits/AchievementHabit'
import ExerciseHabit from './habits/ExerciseHabit'
import MedicineHabit from './habits/MedicineHabit'
import SleepHabit from './habits/SleepHabit'
import ToDoHabit from './habits/ToDoHabit'
import WaterHabit from './habits/WaterHabit'

export default function HabitDashboard() {
    return (
        <div>
            <h2>Hábitos do Dia</h2>
            <WaterHabit />
            <ExerciseHabit />
            <MedicineHabit />
            <SleepHabit />
            <ToDoHabit />
            <AchievementHabit />
        </div>
    );
}