import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormSignUp from '../../components/forms/FormSignUp.component';
import FormSingIn from '../../components/forms/FormSignIn.component';

class WestContainer extends Component {
    render() {
        return (
            <div>
                West container
                <FormSignUp></FormSignUp>
                <FormSingIn></FormSingIn>
            </div>
        );
    }
}

WestContainer.propTypes = {

};

export default WestContainer;