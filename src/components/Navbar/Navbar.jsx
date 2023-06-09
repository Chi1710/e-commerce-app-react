import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Navbar.scss";


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="left">
                <div className="item">
                <img src="/img/en.png" alt="" />
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <Link className="link" to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/2">Men</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/3">Childern</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/4">Accessories</Link>
                </div>
            </div>
            <div className="center">
                <Link className="link" to="/">TSE Store</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className="link" to="/">HomgPage</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">About</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Contact</Link>
                </div>
                <div className="icons">
                    <SearchIcon />
                    <PersonOutlineIcon />
                    <FavoriteBorderOutlinedIcon />
                    <div className="cartIcon">
                        <ShoppingCartOutlinedIcon /> 
                        <span>0</span>
                    </div>

                </div>
                </div>      
            </div>
        </div>
  )
}

export default Navbar