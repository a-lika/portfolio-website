import React, { Component } from "react";

import Home from './../presentational/start-window/Home';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import ContentRus from '../../vocabulary/Russian';
import ContentEng from '../../vocabulary/English';

const mapStateToProps = (state) => {
    return {
        language: state.language,
    }
};

class HomeContainer extends Component {

    render() {
        let language =  (this.props.language === "english") ? ContentEng : ContentRus;
        return (
            <Home content = {language} />
        )
    }
};

export default connect( 
    mapStateToProps
)(HomeContainer);