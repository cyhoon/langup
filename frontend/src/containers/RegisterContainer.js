import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signUpRequest } from '../actions/Authentications';
import RegisterMain from '../components/organisms/RegisterMain';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            pw: '',
            name: ''
        };
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
            if (this.props.status === 'SUCCESS') { this.props.history.push('/'); }
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
    return { status, messageOn, message };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signUpRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);