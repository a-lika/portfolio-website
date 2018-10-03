import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import HomeContainer from './components/container/HomeContainer';
import AboutMeContainer from './components/container/AboutMeContainer';
import MenuContainer from './components/container/MenuContainer';
import SkillsContainer from './components/container/SkillsContainer';
import EducationContainer from './components/container/EducationContainer';
import ExperienceContainer from './components/container/ExperienceContainer';
import ContactsContainer from './components/container/ContactsContainer';
import ProjectsContainer from './components/container/ProjectsContainer';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';

import linkedIn from "./images/linkedIn.png";
import gitHub from "./images/github.png";

import './scss/main.scss';

const App = () => (
    <Fragment>
        <main>
            <section className="content">
                <Route exact path='/' component={HomeContainer} />
                <Route path='/about-me' component={AboutMeContainer} />
                <Route path='/skills' component={SkillsContainer} />
                <Route path='/education' component={EducationContainer} />
                <Route path='/experience' component={ExperienceContainer} />
                <Route path='/contacts' component={ContactsContainer} />
                <Route path='/projects' component={ProjectsContainer} />
            </section>
            <section className="menu">         
                <MenuContainer />
            </section>
        </main>
        <footer>
            <a href="https://www.linkedin.com/in/anzhelika-prigotskaya/" target="_blank">
                <img src={linkedIn} alt="linkedIn" title="linkedin" />
            </a>
            <a href="https://github.com/a-lika" target="_blank">
                <img src={gitHub} alt="gitHub" title="github" />
            </a>
        </footer>
    </Fragment> 
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>      
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
