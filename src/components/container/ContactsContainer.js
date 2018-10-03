import React, {Component} from "react";
import PropTypes from "prop-types";

import Contacts from './../presentational/contacts/Contacts';
import { connect } from 'react-redux';

import ContentRus from '../../vocabulary/Russian';
import ContentEng from '../../vocabulary/English';

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
};

class ContactsContainer extends Component {
    
    render() {
        let language =  (this.props.language === "english") ? ContentEng : ContentRus;

        return (
            <Contacts content = {language} />  
        )
    }
}

export default connect(
    mapStateToProps
)(ContactsContainer);