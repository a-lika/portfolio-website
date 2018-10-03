import './style.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Page = ({ headerName, content, pageTitle }) => (
    <Fragment>
        <header className="header-name-container">
            <div className="header-name">
                {headerName}
                <div className="page-title">
                    {pageTitle}
                </div>
            </div>
        </header>
        <section className="info">
            {content}
        </section>
    </Fragment>
);

export default Page;