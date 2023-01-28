import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Image from "next/image"
import Link from "next/link"
import { supabase } from ".."

export default function SessionMovie({movieData}) {

    return (
        <>
            <Navbar />
            <div className="movie-session-info">
                <div className="session-movie">
                    <Image src={movieData.poster} width="100" height="150" className="card-img"/>
                    <div>
                        <h1>{movieData.name} ({movieData.year})</h1>
                        <p className="eng-name">{movieData.movieLength} мин.</p>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const {params} = context
    let data = {}
    let movie = await supabase
        .from('movies')
        .select()
        .eq('id', params.movie)
    
    if(movie.data) {

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
    
        return {
            props: {
                movieData: data, 
            }
        }
    } else {
        return {
            notFound: true
        }
    }
}