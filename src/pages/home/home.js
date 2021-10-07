import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    const id = 1;
    return(
        <div>
            <div>This is home page</div>
            <Link to={`/detail/${id}`}>go to detail</Link>
        </div>
    )
}

export default Home;