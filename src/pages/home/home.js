import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    const id = 1;
    return(
        <div>
            This is home page
            <Link to={`/detail/${id}`}>click here</Link>
        </div>
    )
}

export default Home;