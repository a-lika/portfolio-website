import './style.scss';

import React, { Fragment } from 'react';

const ProjectInfo = ({ codeLinkTitle, name, projectLink, codeLink, description, tags }) => {
    const paragraphs = descriptionMap(description);
    const tagNames = tagsMap(tags);
    return (
        <section className="project-info">
            <div className="project-links">
                <h2 className="project-name"><a href={projectLink} target="_blank">{name}</a></h2>
                <a href={codeLink} className="see-code" target="_blank">{codeLinkTitle}</a>
            </div>
            <div className="about-project">
                <div className="project-description">
                    {paragraphs}
                </div>
                <div className="project-tags">
                    {tagNames}
                </div>
            </div>
        </section>
    )
};

const descriptionMap = (paragraphs) => {
    let array = [];
    for (let key in paragraphs) {
        array.push(<p key={key}>{paragraphs[key]}</p>);
    }
    return [array];
};

const tagsMap = (tags) => (tags.map((item, i) => <li key={i}>{item}</li>));

export default ProjectInfo;