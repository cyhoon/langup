import React from 'react';

import PageTemplate from '../../templates/PageTemplate';
import HeaderOrganisms from '../../organisms/Header';

const HomePage = () => {
    return (
        <PageTemplate header={ <HeaderOrganisms/> }>
        </PageTemplate>
    );
}

export default HomePage;