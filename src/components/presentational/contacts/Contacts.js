import './style.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Page from "../page/Page";
import telephone from "./images/telephone.png";
import letter from "./images/letter.png";
import skype from "./images/skype.png";

import linkedIn from "../../../images/linkedIn.png";
import github from "../../../images/github.png";

const Contacts = ({ content }) => (
    <Page
        headerName={"Contacts"}
        pageTitle={content.menu.contacts}
        content={
            <article className="content-block contacts">
                <section className="card">
                    <section className="contact-name">
                        <h2>{content.main.name}</h2>
                        <h3>{content.main.post}</h3>
                    </section>
                    <section className="contact-social">
                        <div className="contact-info">
                            <img src={`/${linkedIn}`} alt="linkedIn" /><a href="https://www.linkedin.com/in/anzhelika-prigotskaya-689a43143/" target="_blank">LinkeIn</a>
                        </div>
                        <div className="contact-info">
                            <img src={`/${github}`} alt="github" /><a href="https://github.com/a-lika" target="_blank">GitHub</a>
                        </div>
                    </section>
                    <section className="contact-data">
                        {/*}  <section className="toContact"> */}
                        <div className="contact-info">
                            <img src={telephone} alt="telephone" />+375 (29) 1589432
                                </div>
                        <div className="contact-info">
                            <img src={letter} alt="letter" />anzhelika110k@gmail.com
                                </div>
                        <div className="contact-info">
                            <img src={skype} alt="skype" />anzhelika.pr
                                </div>
                    </section>
                    <div className="angle"></div>
                </section>
            </article>
        }
    />
);

export default Contacts;