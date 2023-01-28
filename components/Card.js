import Image from "next/image"
import { useRouter } from "next/router"

export default function Card(props) {
    

    const router = useRouter()

    function redirect() {
        router.push(`/premieres/${props.id}`)
    }

    return (
        <div className="card-box" onClick={redirect}>
            <Image src={props.poster} width="200" height="350" className="card-img" />
            <div className="card-info">
                <h3>{props.movie}</h3>
            </div>
        </div>
    )
}