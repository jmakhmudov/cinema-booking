import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import * as React from 'react';
import Logo from "./Logo";


const pages = [['Главная', '/'], ['Премьеры', '/premieres'], ['Кинотеатры', '/cinemas'], ['Скоро в прокате', '/soon']];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='fixed' color="transparent" component="nav" sx={{
            backdropFilter: "blur(10px)",
            background: "rgba(24, 21, 38, 0.550)",
            boxShadow: 'none',
            borderBottom: 'solid #2B2835 1px',
            mx: 'auto'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        ml: '7vw'
                    }}>
                        <Logo />
                    </Box>

                    <Box sx={{
                        display: { xs: 'flex', md: 'none' },
                    }}>
                        <Logo />
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>

                    </Box>
                    <Box sx={{
                        flexGrow: 0,
                        display: { xs: 'none', md: 'flex' },
                        mr: '7vw'
                    }}>
                        {pages.map((page) => (
                            <Typography>
                                <Link href={page[1]} className='nav-links'>
                                    {page[0]}
                                </Link>
                            </Typography>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                                    <Typography>
                                        <Link href={page[1]} style={{color: "#100E19"}}>
                                            {page[0]}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    );
}
export default Navbar;