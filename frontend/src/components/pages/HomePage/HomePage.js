import React from 'react';

import HeaderContainer from '../../../containers/HeaderContainer';
import PageTemplate from '../../templates/PageTemplate';
import HeaderOrganisms from '../../organisms/Header';
import Jumbotron from '../../molecules/Jumbotron';

const HomePage = () => {
    return (
        <PageTemplate 
            header={ <HeaderContainer/> }
        >
            <Jumbotron 
                subText="어떤것 보다 빠른 오픈사전"
                mainText="LANGUP DICTIONARY"
                buttonText="Download the App"
                // imagePath = "https://cdn-images-1.medium.com/max/2000/1*TckFXfkU_bg0aADPYR_t7Q.png"
            />
        </PageTemplate>
    );
}

export default HomePage;