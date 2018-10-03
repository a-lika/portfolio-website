import React, {Component} from "react";
import Skills from './../presentational/skills/Skills';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import ContentRus from '../../vocabulary/Russian';
import ContentEng from '../../vocabulary/English';

const mapStateToProps = (state) => {
    return {
        language: state.language,
    }
};

class SkillsContainer extends Component {

    render() {
        let language =  (this.props.language === "english") ? ContentEng : ContentRus;
 
         return (
            <Skills content = {language} 

            />  
        )
    }
}

export default connect( 
    mapStateToProps
)(SkillsContainer);