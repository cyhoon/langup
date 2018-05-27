import React from 'react';

import AuthTemplate from '../../templates/AuthTemplate';

const AuthPage = ({ match }) => {
    return (
        <AuthTemplate url={match.url} />
    );
};

export default AuthPage;