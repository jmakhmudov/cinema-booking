import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Image from "next/image"
import Link from "next/link"
import Date from "../../components/Date"
import SessionCard from "../../components/SessionCard"
import { supabase } from ".."

export default function SessionMovie({ movieData, sessions, dates, rooms, cinemas }) {


    return (
        <>
            <Navbar />
            <div className="movie-session-info">
                <div className="session-movie">
                    <Image src={movieData.poster} width="100" height="150" className="card-img" />
                    <div>
                        <h1>{movieData.name} ({movieData.year})</h1>
                        <p className="eng-name">{movieData.movieLength} мин.</p>
                    </div>
                </div>

                <div className="dates-list">
                    {dates.map(date => {
                        return <Date key={date[1]} day={date[0]} month={date[1]} />
                    })}
                </div>

                <div className="sessions-list">
                    {sessions.map(session => {
                        return <SessionCard session={session} cinemas={cinemas} rooms={rooms} key={session[0].id}/>
                    })}
                </div>

            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const { params } = context
    let data = {}
    let movie = await supabase
        .from('movies')
        .select()
        .eq('id', params.movie)

    if (movie.data) {
        let sessions = await supabase
            .from('sessions')
            .select()
            .eq('movie_id', params.movie)

        let response = await fetch(
            `https://cloud-api.kinopoisk.dev/movie?field=id&search=${movie.data[0].movie_name}&token=5175VH0-NV44QDJ-H5S4PDF-D91VG2C`
        )


        await response.json().then((value) => {
            //console.log(value.name)
            data.name = value.name
            data.description = value.description
            data.rating = value.rating
            data.alternativeName = value.alternativeName
            data.poster = value.poster.url
            data.movieLength = value.movieLength
            data.year = value.year
        })

        const dates = []

        sessions.data.map(session => {
            const date = [session.start_date[8] + session.start_date[9], session.start_date[5] + session.start_date[6]]

            if (!dates.includes(date)) {
                dates.push(date)
            }
        })

        const name = await supabase
            .from("rooms")
            .select()

        let cinema_name = await supabase
            .from("cinemas")
            .select()




        return {
            props: {
                movieData: data,
                sessions: [sessions.data],
                dates: dates,
                cinemas: cinema_name.data,
                rooms: name.data
            }
        }
    } else {
        return {
            notFound: true
        }
    }
}