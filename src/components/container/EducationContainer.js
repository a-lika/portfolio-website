import React, {Component} from "react";
import PropTypes from "prop-types";

import Education from './../presentational/education/Education';
import { connect } from 'react-redux';

import ContentRus from '../../vocabulary/Russian';
import ContentEng from '../../vocabulary/English';

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
};

class EducationContainer extends Component {

    render() {
        let language =  (this.props.language === "english") ? ContentEng : ContentRus;

         return (
            <Education content = {language} />  
        )
    }
}

export default connect(
    mapStateToProps
)(EducationContainer);