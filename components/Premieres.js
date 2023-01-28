import Card from "./Card"
import Link from "next/link"

export default function Premieres({ movies }) {

    return (

        <div className="movies-list">
            <h3>Премьеры</h3>
            <div className="card-list">
                {movies.map(movie => {
                    return <Card key={movie.id} id={movie.id} movie={movie.name} poster={movie.poster} />
                })}
            </div>
        </div>

    )
}