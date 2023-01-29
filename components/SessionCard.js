import Link from "next/link"

export default function SessionCard({session, cinemas, rooms }) {
    
    return (
        <div className="session-box">
            <div className="session-card">
                <div>
                    {
                        cinemas.map(cinema => {
                            if(cinema.id==session[0].cinema_id) {
                                return <h1 key={cinema.id+session.id}>{cinema.cinema_name}</h1>
                            }
                        })
                    }
                    <div className="session-room">
                        {
                            rooms.map(room => {
                                if(room.id==session[0].room_id){
                                    return <p key={room.id}>{room.name}</p>
                                }
                            })
                        }
                        <p className="movie-type">{session[0].type}D</p>
                    </div>

                </div>

                <div className="right-section">
                    <h2 className="movie-time">{session[0].start_time.slice(0, 5)}</h2>
                    
                    <Link href={`/sessions/${session[0].id}`}>
                        <button className="main-btn">Купить билет</button>
                    </Link>
                </div>
            </div>
            <hr/>
        </div>
    )
}