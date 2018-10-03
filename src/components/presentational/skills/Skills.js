import './style.scss';
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Page from "../page/Page";

const Skills = ({content}) => (
    <Fragment>
        <Page 
            headerName = {"Skills"}
            pageTitle = {content.menu.skills}
            content = {
                <article className="content-block skills">
                    <article className="technology">
                        <h2>{content.skills.tools}</h2>
                        <h3>{content.skills.main} :</h3>            
                            <li>JavaScript (ES6)</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SCSS</li>
                            <li>Webpack</li>
                            <li>Git</li>
                
                        <h3>{content.skills.alsoWorked} :</h3>            
                            <li>PHP5</li>
                            <li>MySQL</li>
                            <li>Firebase</li>
                            <li>Lodash</li>
                            <li>jQuery</li>
                            <li>GreenSock</li>
                            <li>Gulp</li>

                        <h3>{content.skills.additionally} :</h3> 
                            <li>Photoshop</li>                          
                            <li>CorelDraw</li>
                            <li>SEO</li>
                    </article>
                    <article className="languages">
                        <h2>{content.skills.languages}</h2>            
                            <li>{content.skills.english}</li>
                            <li>{content.skills.russian}</li>
                            <li>{content.skills.belarusian}</li>
                    </article>
                </article>
            }
        />
    </Fragment>
);

export default Skills;