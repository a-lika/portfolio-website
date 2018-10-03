import './style.scss';
import React, {Fragment} from "react";

import lamp from './images/lamp.png';


const Home = ({content}) => (
    <Fragment>     
        <header></header>
        <section>
            <h1 className="name">{content.main.name}</h1>
            <h2 className="post">{content.main.post}</h2>
            <img src={`/${lamp}`} />
        </section>     
    </Fragment> 
);

export default Home;