import React from 'react';

import AuthTemplate from '../../templates/AuthTemplate';
import LoginContainer from '../../../containers/LoginContainer';

const AuthPage = ({ match }) => {
    return (
        <AuthTemplate 
            url={match.url}
            LoginContainer={<LoginContainer />}
        />
    );
};

export default AuthPage;