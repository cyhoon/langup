import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isLogin, logout } from '../actions/Authentications';

import HeaderOrganisms from '../components/organisms/Header';
import { bindActionCreators } from 'redux';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopupOn: false,
            userMenu: null,
        };

        this.props.isLogin();
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

    handleOnBlur = () => {
        this.setState({
            isPopupOn: false,
        });
    }

    handleLogout = async () => {
        await this.props.logout();

        this.handleOnBlur();
        // this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <HeaderOrganisms
                    isLoggedIn={this.props.isLoggedIn}
                    isPopupOn={this.state.isPopupOn}
                    setUserMenuRef={this.setUserMenuRef}
                    profileClick={this.profileClick}
                    handleOnBlur={this.handleOnBlur}
                    handleLogout={this.handleLogout}
                />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log('state: ', state.auth.status.isLoggedIn);
    return {
        ...state.auth.status
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ isLogin, logout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);