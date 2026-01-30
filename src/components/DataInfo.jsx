export default function DataInfo({ date }) {
    return (
        <div>
            <p>{ date.toLocaleDateString() }</p>
        </div>
    )
}