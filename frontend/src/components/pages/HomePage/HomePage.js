import React from 'react';

import HeaderContainer from '../../../containers/HeaderContainer';
import PageTemplate from '../../templates/PageTemplate';
import HeaderOrganisms from '../../organisms/Header';
import IntroduceMain from '../../organisms/IntroduceMain';

const HomePage = () => {
    return (
        <PageTemplate 
            header={ <HeaderContainer/> }
        >
            <IntroduceMain />
        </PageTemplate>
    );
}

export default HomePage;