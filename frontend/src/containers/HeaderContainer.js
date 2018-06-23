import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isLogin } from '../actions/Authentications';

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

    handleOnBlur = (val, target) => {
        this.setState({
            isPopupOn: false,
        });
    }

    render() {
        return (
            <div>
                <HeaderOrganisms
                    isLoggedIn={this.props.isLoggedIn}
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
    return {
        ...state.auth.status
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ isLogin }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);