import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";

import Projects from './../presentational/projects/Projects';
import { connect } from 'react-redux';

import ContentRus from '../../vocabulary/Russian';
import ContentEng from '../../vocabulary/English';

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
};

class ProjectsContainer extends Component {
    /*constructor(props) {
        super(props)
    }*/
    /*
    handleChangefirstName = (event) => {
         this.setState({firstName: event.target.value});
    }
    
    handleChangelastName = (event) => {
         this.setState({lastName: event.target.value});
    }
    */
  /*  handleChangeLanguage = (event) => {
         this.props.dispatch(changeLanguage(event.target.id));
         console.log(this.props);
    }*/
    
    render() {
        let language =  (this.props.language === "english") ? ContentEng : ContentRus;
        
        return (
            <Projects content = {language} />
        )
    }
}

export default connect(
    mapStateToProps
)(ProjectsContainer);