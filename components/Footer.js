import Logo from "./Logo"
import Link from "next/link"

export default function Footer() {


    return(
        <div className="footer-box">
            <Logo />
            <div className="footer-text">
                <div className="policies">
                    <Link href="/policies">
                        Политика конфеденциальности
                    </Link>
                    <Link href="/commerce" className="commerce">
                        Коммерческие предложения
                    </Link>
                </div>
                <hr/>
                <div className="rights">
                    <p>All Rights Reserved by HOTKEY </p>
                    <p>© 2023</p>
                </div>
            </div>
        </div>
    )
}