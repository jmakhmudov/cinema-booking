import { useRouter } from "next/router"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import Footer from "../../components/Footer"
import Link from "next/link"
import { supabase } from ".."

export default function Premiere({movieData}) {
    const router = useRouter()
    const { movie } = router.query

    return (
        <>
            <Navbar />
            <div className="movie-box">
                <Image src={movieData.poster}  width="250" height="400" className="card-img"/>
                <div className="movie-info">
                    <div className="title-rating">
                        <div className="movie-title">
                            <h1>{movieData.name} ({movieData.year})</h1>
                            <p className="eng-name">{movieData.alternativeName}</p>
                        </div>

                        <div className="movie-rating">
                            <h1>{movieData.rating.imdb}</h1>
                            <p>IMDB</p>
                        </div>
                    </div>

                    <div className="movie-about">
                        <h3>О фильме</h3>
                        <p>{movieData.description}</p>

                        <p>Продолжительность: <span>{movieData.movieLength} мин.</span></p>
                    </div>

                    <Link href={`/sessions/${movie}`}>
                        <button className="main-btn">Ближайшие сеансы</button>
                    </Link>

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
            //console.log(value.docs[0].name)
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
