import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderOrganisms from '../components/organisms/Header';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderOrganisms />
            </div>
        );
    }
};

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);