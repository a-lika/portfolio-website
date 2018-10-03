import React, {Component} from "react";
import AboutMe from './../presentational/about-me/AboutMe';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import ContentRus from '../../vocabulary/Russian';
import ContentEng from '../../vocabulary/English';

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
};

class AboutMeContainer extends Component {

    render() {
        let language =  (this.props.language === "english") ? ContentEng : ContentRus;
 
         return (
            <AboutMe content = {language} />
        )
    }
}

export default connect( 
    mapStateToProps
)(AboutMeContainer);