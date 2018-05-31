import React from 'react';

import AuthTemplate from '../../templates/AuthTemplate';
import LoginContainer from '../../../containers/LoginContainer';

const AuthPage = ({ match, history }) => {
    return (
        <AuthTemplate 
            url={match.url}
            LoginContainer={<LoginContainer history={history} />}
        />
    );
};

export default AuthPage;