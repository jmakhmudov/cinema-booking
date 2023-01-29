export default function Date({day, month}) {
    console.log(day)

    return (
        <div className="date-box">
            <h3>{day}</h3>
            <p>{month}</p>
        </div>
    )
}