import './style.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Page from "../page/Page";
import books from './images/books.png';

const Education = ({ content }) => (
    <Fragment>
        <Page
            headerName={"Education"}
            pageTitle={content.menu.education}
            content={
                <article className="content-block education">
                    <img src={books} alt="books" />
                    <article className="education-list>">
                        <section className="education-info leftside">
                            <div className="place-of-study">
                                Rolling Scopes School
                                <p className="faculty">{content.education.rss.training}</p>
                                <p className="specialization">JavaScript Development</p>
                            </div>
                            <div className="study-period">{content.education.rss.period}</div>
                            <div></div>
                        </section>
                        <section className="education-info rightside">
                            <div></div>
                            <div className="study-period">{content.education.bsuir.period}</div>
                            <div className="place-of-study">
                                {content.education.bsuir.name}
                                <p className="faculty">{content.education.bsuir.faculty}</p>
                                <p className="specialization">{content.education.bsuir.specialization}</p>
                            </div>
                        </section>
                        <section className="education-info leftside">
                            <div className="place-of-study">
                                {content.education.envila.name}
                                <p className="faculty">{content.education.envila.faculty}</p>
                                <p className="specialization">{content.education.envila.specialization}</p>
                            </div>
                            <div className="study-period">2007 - 2012</div>
                            <div></div>
                        </section>
                        <section className="education-info rightside">
                            <div></div>
                            <div className="study-period">2000 - 2007</div>
                            <div className="place-of-study">{content.education.gymnasium13}</div>
                        </section>
                        <section className="education-info leftside">
                            <div className="place-of-study">{content.education.gymnasium75}</div>
                            <div className="study-period">1996 - 2000</div>
                            <div></div>
                        </section>
                    </article>

                </article>
            }
        />
    </Fragment>
);

export default Education;