import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegisterMain from '../components/organisms/RegisterMain';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Register Container
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signInRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);