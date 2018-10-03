import './style.scss';
import React, { Fragment } from "react";
import { NavLink } from 'react-router-dom';

import russian from "./images/rus.png";
import english from "./images/gb.png";

const Menu = ({ content, handleChangeLanguage }) => (
    <Fragment>
        <nav>
            <NavLink exact to="/" activeClassName="active-link">
                <li>{content.menu.home}</li>
            </NavLink>
            <NavLink to="/about-me" activeClassName="active-link">
                <li>{content.menu.aboutMe}</li>
            </NavLink >
            <NavLink to="/skills" activeClassName="active-link">
                <li>{content.menu.skills}</li>
            </NavLink >
            <NavLink to="/education" activeClassName="active-link">
                <li>{content.menu.education}</li>
            </NavLink >
            <NavLink to="/experience" activeClassName="active-link">
                <li>{content.menu.experience}</li>
            </NavLink >
            <NavLink to="/projects" activeClassName="active-link">
                <li>{content.menu.projects}</li>
            </NavLink >
            <NavLink to="/contacts" activeClassName="active-link">
                <li>{content.menu.contacts}</li>
            </NavLink>
            <li><a href="#" className="resumeButton">{content.menu.resume}</a></li>
            <li className="language">
                <input type='radio' name='language' id='russian' onChange={handleChangeLanguage} defaultChecked />
                <label htmlFor='russian'><img src={russian} alt="russian" /></label>

                <input type='radio' name='language' id='english' onChange={handleChangeLanguage} />
                <label htmlFor='english'><img src={english} alt="english" /></label>
            </li>
        </nav>
    </Fragment>
);

export default Menu;