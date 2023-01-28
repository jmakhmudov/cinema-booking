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
            `https://cloud-api.kinopoisk.dev/movie?field=name&search=${movie.data[0].movie_name}&token=5175VH0-NV44QDJ-H5S4PDF-D91VG2C`
        )
    
    
        await response.json().then((value) => {
            //console.log(value.docs[0].name)
            data.name = value.docs[0].name
            data.description = value.docs[0].description
            data.rating = value.docs[0].rating
            data.alternativeName = value.docs[0].alternativeName
            data.poster = value.docs[0].poster.url
            data.movieLength = value.docs[0].movieLength
            data.year = value.docs[0].year
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