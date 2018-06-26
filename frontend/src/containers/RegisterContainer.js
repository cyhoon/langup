import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signUpRequest } from '../actions/Authentications';
import RegisterMain from '../components/organisms/RegisterMain';

import Storage from '../lib/storage';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            pw: '',
            name: ''
        };
    }

    componentWillMount = () => {
        if (Storage.get('user') !== null) { this.props.history.push('/'); }
    }

    handleChangeInputId = (e) =>  {
        this.setState({ id: e.target.value });
    }

    handleChangeInputPw = (e) => {
        this.setState({ pw: e.target.value });
    }

    handleChangeInputName = (e) => {
        this.setState({ name: e.target.value });
    }

    handleRegister = () => {
        return this.props.signUpRequest(this.state.id, this.state.pw, this.state.name)
        .then(() => {
            if (this.props.status === 'SUCCESS') { 
                Storage.set('token', this.props.token);
                Storage.set('user', this.props.user);

                this.props.history.push('/');
                return true;
            }
        });
    }

    render() {
        return (
            <div>
                <RegisterMain
                    title='Langup'
                    experience='언어 공부하기 참 좋은곳'

                    messageOn={this.props.messageOn}
                    message={this.props.message}

                    id={this.state.id}
                    pw={this.state.pw}
                    name={this.state.name}

                    handleChangeInputId={this.handleChangeInputId}
                    handleChangeInputPw={this.handleChangeInputPw}
                    handleChangeInputName={this.handleChangeInputName}

                    handleRegister={this.handleRegister}
                />
            </div>
        );
    }
};

const mapStateToProps = ({ auth }) => {
    const { status, messageOn, message } = auth.register;
    return { status, messageOn, message, ...auth.status };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signUpRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);