import React from 'react';

import HeaderContainer from '../../../containers/HeaderContainer';
import PageTemplate from '../../templates/PageTemplate';
import IntroduceMain from '../../organisms/IntroduceMain';

const HomePage = ({ history }) => {
    return (
        <PageTemplate
            header={ <HeaderContainer history={history} /> }
        >
            <IntroduceMain />
        </PageTemplate>
    );
}

export default HomePage;