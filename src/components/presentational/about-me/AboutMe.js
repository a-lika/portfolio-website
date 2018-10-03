import './style.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Page from "../page/Page";
import photo from "./images/my_photo.jpg";
import person from "./images/person.png";
import birthday from "./images/birthday.png";
import location from "./images/location.png";

const AboutMe = ({ content }) => (
    <Fragment>
        <Page
            headerName={"ABOUT ME"}
            pageTitle={content.menu.aboutMe}
            content={
                <article className="content-block about-me">
                    <img src={photo} alt="photo" />
                    <section className="about-me-description">
                        <section className="short-info-about-me">
                            <div className="person"><img src={person} alt="" />{content.aboutMe.person}</div >
                            <div className="birthday"><img src={birthday} alt="" />10.10.1989</div >
                            <div className="location"><img src={location} alt="" />{content.aboutMe.location}</div >
                        </section>
                        <section className="about-me-text">
                            <p>{content.aboutMe.description.first}</p>
                            <p>{content.aboutMe.description.second}</p>
                        </section>
                    </section>
                </article>
            }
        />
    </Fragment>
);

export default AboutMe;