import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderOrganisms from '../components/organisms/Header';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopupOn: false,
            userMenu: null,
        };
    }

    setUserMenuRef = (userMenu) =>{
        this.setState({
            userMenu,
        });
    }

    profileClick = () => {
        this.setState({
            isPopupOn: !this.state.isPopupOn,
        });
    }

    handleOnBlur = (val, target) => {
        this.setState({
            isPopupOn: false,
        });
    }

    render() {
        return (
            <div>
                <HeaderOrganisms
                    isPopupOn={this.state.isPopupOn}
                    setUserMenuRef={this.setUserMenuRef}
                    profileClick={this.profileClick}
                    handleOnBlur={this.handleOnBlur}
                />
            </div>
        );
    }
};

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);