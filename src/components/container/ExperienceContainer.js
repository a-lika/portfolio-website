import React, {Component} from "react";
import PropTypes from "prop-types";

import Experience from './../presentational/experience/Experience';
import { connect } from 'react-redux';

import ContentRus from '../../vocabulary/Russian';
import ContentEng from '../../vocabulary/English';

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
};

class ExperienceContainer extends Component {

    render() {
        let language =  (this.props.language === "english") ? ContentEng : ContentRus;
        
        return (
           <Experience content = {language} />  
       )
   }
};

export default connect(
   mapStateToProps
)(ExperienceContainer);
