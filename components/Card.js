import Image from "next/image"

export default function Card() {


    return (
        <div className="card-box">
            <Image  src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/2e51cb8b-fd51-4166-84a2-63559733baac/orig" width="200" height="350" className="card-img"/>
            <div className="card-info">
                <h4>Аватар: Путь воды</h4>
                <p>12+ | 248мин. | США</p>
            </div>
        </div>
    )
}