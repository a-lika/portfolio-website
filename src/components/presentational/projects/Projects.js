import './style.scss';

import React, { Fragment } from 'react';
import Slider from "./Slider";
import ProjectInfo from "./About-project";

import PropTypes from 'prop-types';

import Page from "../page/Page";

import myPortfolio1 from './images/myPortfolio/screen.png';

import zGame1 from './images/ZGame/screen1.png';
import zGame2 from './images/ZGame/screen2.png';
import zGame3 from './images/ZGame/screen3.png';
import zGame4 from './images/ZGame/screen4.png';
import zGame5 from './images/ZGame/screen5.png';
//import zGame6 from './images/ZGame/screen6.png';

import mmGame1 from './images/mmGame/screen1.png';
import mmGame2 from './images/mmGame/screen2.png';
import mmGame3 from './images/mmGame/screen3.png';
/*
import belarusToday1 from './images/belarusToday/bel_main.png';
import belarusToday2 from './images/belarusToday/bel_minsk.png';
import belarusToday3 from './images/belarusToday/bel_gallery.png';
import belarusToday4 from './images/belarusToday/bel_search.png';
import belarusToday5 from './images/belarusToday/bel_admin_panel.png';
*/
import portfolioPython1 from './images/portfolioPython/screen1.png';
//import portfolioPython1 from './images/portfolioPython/portfolio_screen_header.png';
import portfolioPython2 from './images/portfolioPython/portfolio_screen_skills.png';
import portfolioPython3 from './images/portfolioPython/portfolio_screen_experience.png';
import portfolioPython4 from './images/portfolioPython/portfolio_screen_footer.png';

const Projects = ({ content }) => (
    <Fragment>
        <Page
            headerName={"Projects"}
            pageTitle={content.menu.projects}
            content={
                <article className="content-block projects">
                    <section className="project">
                        <ProjectInfo
                            codeLinkTitle={content.projects.codeLinkTitle}
                            name={content.projects.myPortfolio.name}
                            projectLink={"https://www.linkedin.com/feed/"}
                            codeLink={"https://www.linkedin.com/feed/"}
                            description={content.projects.myPortfolio.description}
                            tags={content.projects.myPortfolio.tags}
                        />
                        <Slider
                            images={[
                                myPortfolio1
                                ]}

                        />
                    </section>
                    <section className="project">
                        <Slider
                            images={[
                                zGame1,
                                zGame2,
                                zGame3,
                                zGame4,
                                zGame5
                            ]}
                        />
                        <ProjectInfo
                            codeLinkTitle={content.projects.codeLinkTitle}
                            name={content.projects.zGame.name}
                            projectLink={"https://a-lika.github.io/the-game/"}
                            codeLink={"https://www.linkedin.com/feed/"}
                            description={content.projects.zGame.description}
                            tags={content.projects.zGame.tags}
                        />
                    </section>
                    <section className="project">
                        <ProjectInfo
                            codeLinkTitle={content.projects.codeLinkTitle}
                            name={content.projects.matchMatchGame.name}
                            projectLink={"https://a-lika.github.io/match-match-game/"}
                            codeLink={"https://github.com/a-lika/a-lika.github.io/tree/master/match-match-game"}
                            description={content.projects.matchMatchGame.description}
                            tags={content.projects.matchMatchGame.tags}
                        />
                        <Slider
                            images={[
                                mmGame1,
                                mmGame2,
                                mmGame3
                            ]}
                        />
                    </section>
                    <section className="project">
                        <Slider
                            images={[
                                portfolioPython1,                               
                                portfolioPython2,
                                portfolioPython3,
                                portfolioPython4
                            ]}
                        />
                        <ProjectInfo
                            codeLinkTitle={content.projects.codeLinkTitle}
                            name={content.projects.portfolioPython.name}
                            projectLink={"https://a-lika.github.io/the-game/"}
                            codeLink={"https://www.linkedin.com/feed/"}
                            description={content.projects.portfolioPython.description}
                            tags={content.projects.portfolioPython.tags}
                        />
                    </section>



                </article>
            }
        />
    </Fragment>
);

export default Projects;