import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <nav>
            <div className='div-header'>
                <div className='div-svg'>
                    <div>Logo</div>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                    <NavLink exact to='/detail' activeClassName='active'>Detail</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;