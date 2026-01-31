export default function HabitCard({ title, color, children }) {
    return (
        <div className="habit-card" style={{ borderTop: `6px solid ${color}` }}>
            <h3>{title}</h3>
            {children}
        </div>
    );
}