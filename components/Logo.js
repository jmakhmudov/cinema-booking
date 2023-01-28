import Typography from "@mui/material/Typography"
import Link from "next/link"

export default function Logo() {
    return (
        <Typography
            variant='h6'
            noWrap
            sx={{
                mr: 2,
                fontWeight: 900,
                textDecoration: 'none'
            }}
        >
            <Link href="/">
                <span className="imp-text">KINO</span>KASSA
            </Link>
        </Typography>
    )
}