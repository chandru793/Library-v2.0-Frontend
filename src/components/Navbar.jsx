import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.png'
import { useEffect, useState } from 'react';


const pages = [
    <Link Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link >,
    <Link Link to="/books" style={{ textDecoration: 'none', color: 'inherit' }}>Books</Link >,
    <Link Link to="/news" style={{ textDecoration: 'none', color: 'inherit' }}>News</Link >,
    <Link Link to="/summarize" style={{ textDecoration: 'none', color: 'inherit' }}>Summarize</Link >,
    <Link Link to="/article-extraction" style={{ textDecoration: 'none', color: 'inherit' }}>Article Extraction</Link >,
];
// const name = localStorage.getItem('name')
// console.log(name)
// const settings = [
//     // <div disabled>Profile</div>,
//     // <div disabled>Account</div>,
//     // <div disabled>Dashboard</div>,
//     <div disabled>{name}</div>,
//     <div onClick={() => { localStorage.clear(); window.location.href = "/login"; }}>Logout</div>
// ];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [name, setName] = useState('')

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const settings = [
        // <div disabled>Profile</div>,
        // <div disabled>Account</div>,
        // <div disabled>Dashboard</div>,
        <div disabled>{name}</div>,
        <div onClick={() => { localStorage.clear(); window.location.href = "/login"; }}>Logout</div>
    ]

    useEffect(() => {
        const name = localStorage.getItem('name')
        console.log(name)
        setName(name)
    }, []);



    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography sx={{ display: { xs: 'none', md: 'flex' }, mr:0.5 }}>
                        <img src={Logo} alt='Logo' height={30} width={30} sx={{ display: { xs: 'none', md: 'flex' }}} />
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/home"
                        ClassName="title"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.01rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ext-Insights
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography sx={{ display: { xs: 'flex', md: 'none' }}}>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        <img src={Logo} alt='Logo' height={30} width={30} sx={{ display: { xs: 'flex', md: 'none' }}}/>
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.01rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ext-Insights
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
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