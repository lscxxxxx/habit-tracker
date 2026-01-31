import AchievementHabit from './habits/AchievementHabit'
import ExerciseHabit from './habits/ExerciseHabit'
import MedicineHabit from './habits/MedicineHabit'
import SleepHabit from './habits/SleepHabit'
import ToDoHabit from './habits/ToDoHabit'
import WaterHabit from './habits/WaterHabit'

export default function HabitDashboard({ water, 
                                         waterGoal, 
                                         onAddWater, 
                                         exercise, 
                                         exerciseGoal, 
                                         onAddExercise,
                                         sleep,
                                         sleepGoal,
                                         onUpdateSleep,
                                         medicines,
                                         onAddMedicine,
                                         onToggleMedicine
                                        }) {
    return (
        <div className="dashboard">
            <h2>Hábitos do Dia</h2>
            <WaterHabit 
                value={water}
                goal={waterGoal}
                onAdd={onAddWater}
            />
            <ExerciseHabit 
                data={exercise}
                goal={exerciseGoal}
                onAdd={onAddExercise}
            />
            <MedicineHabit 
                medicines={medicines}
                onAdd={onAddMedicine}
                onToggle={onToggleMedicine}
            />
            <SleepHabit 
                value={sleep}
                goal={sleepGoal}
                onUpdate={onUpdateSleep}
            />
        </div>
    );
}