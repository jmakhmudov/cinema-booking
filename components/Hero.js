import Link from "next/link"
import Image from "next/image"

export default function Hero() {


    return (
        <>
            <div className="hero-box">
                <Image src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/9d9105d3-9068-4b4c-9066-58d183314c76/orig" layout="fill" className="hero-img"/>
                <div className="text-btn">
                    <h1>Билеты в кино стали намного <span className="imp-text">ближе</span></h1>
                    <Link href="/sessions">
                        <button className="main-btn">Ближайшие сеансы</button>
                    </Link>
                </div>
                 
            </div>
        </>
    )
}