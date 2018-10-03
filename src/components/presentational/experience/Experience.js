import './style.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Page from "../page/Page";

const Experience = ({ content }) => (
    <Fragment>
        <Page
            headerName={"Experience"}
            pageTitle={content.menu.experience}
            content={
                <article className="content-block experience">
                    <article className="experience-list">
                        <section className="experience-info">
                            <div className="job">
                                <p className="profession">{content.experience.sales.post}</p>
                                <p className="job-place">{content.experience.sales.firm}</p>
                            </div>
                            <div className="job-point">
                                <hr /><span className="stain"></span>
                            </div>
                            <div className="job-period">{content.experience.sales.period}</div>
                        </section>
                        <section className="experience-info">
                            <div className="job">
                                <p className="profession">{content.experience.insurance.post}</p>
                                <p className="job-place">{content.experience.insurance.firm}</p>
                            </div>
                            <div className="job-point">
                                <hr /><span className="stain"></span>
                            </div>
                            <div className="job-period">{content.experience.insurance.period}</div>
                        </section>
                        <section className="experience-info">
                            <div className="job">
                                <p className="profession">{content.experience.web.post}</p>
                                <p className="job-place">{content.experience.web.firm}</p>
                            </div>
                            <div className="job-point">
                                <hr />
                            </div>
                            <div className="job-period">{content.experience.web.period}</div>
                        </section>
                    </article>

                </article>
            }
        />
    </Fragment>
);

export default Experience;