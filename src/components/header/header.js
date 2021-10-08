import React from 'react';
import './header.css';

const Header = () => {
    return (
        <nav>
            <div className='div-header'>
                <div className='div-svg'>
                    {/* <div>Logo</div> */}
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <div className="title">Movie Databases</div>
                </div>
            </div>
        </nav>
    )
}

export default Header;