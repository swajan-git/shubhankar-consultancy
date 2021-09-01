import React from 'react';
import CoreValues from '../components/HomePageComponents/CoreValues';
import FeaturedClients from '../components/HomePageComponents/FeaturedClients';
import OurPurpose from '../components/HomePageComponents/OurPurpose';
import ReimagineYourCareer from '../components/HomePageComponents/ReimagineYourCareer';
import TheCoreTeam from '../components/HomePageComponents/TheCoreTeam';
import SEOLayout from '../components/shared/SEOLayout';

const AboutUsPage = () => {
    return (
        <>
            <SEOLayout title="About Us | Shubhankar Consulting" activeNav="about" />
            <TheCoreTeam/>
            <OurPurpose/>
            <CoreValues/>
            <FeaturedClients/>
            <ReimagineYourCareer/>

        </>
    );
};

export default AboutUsPage;