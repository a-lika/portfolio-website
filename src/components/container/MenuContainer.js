import React, {Component, Fragment} from "react";
import Menu from './../presentational/menu/Menu';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { changeLanguage } from '../../actions';

import ContentRus from '../../vocabulary/Russian';
import ContentEng from '../../vocabulary/English';

const mapStateToProps = (state) => {
    return {
        language: state.language,
    }
};

class MenuContainer extends Component {

    handleChangeLanguage = (event) => {
         this.props.dispatch(changeLanguage(event.target.id));
         console.log(this.props);
    }
    
    
    render() {
        let language =  (this.props.language === "english") ? ContentEng : ContentRus;
         return (
             <Fragment>
                <header>                
                    { window.location.pathname !== '/' && <div className="bookmark" /> }              
                </header>
                <Menu 
                    content = { language }
                    handleChangeLanguage = { this.handleChangeLanguage }
                />  
            </Fragment>
        )
    }
};

export default connect(
    mapStateToProps, null, null, {
        pure: false
    },
)(MenuContainer);