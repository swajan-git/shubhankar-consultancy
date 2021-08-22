import Head from 'next/head'
import CoreValues from '../components/HomePageComponents/CoreValues'
import FeaturedClients from '../components/HomePageComponents/FeaturedClients'
import HeroCarousel from '../components/HomePageComponents/HeroCarousel'
import ImpactfulIdeas from '../components/HomePageComponents/ImpactfulIdeas'
import OurPurpose from '../components/HomePageComponents/OurPurpose'
import ReimagineYourCareer from '../components/HomePageComponents/ReimagineYourCareer'
import TheCoreTeam from '../components/HomePageComponents/TheCoreTeam'
import SEOLayout from '../components/shared/SEOLayout'


export default function Home() {
    return (
        < >
            <SEOLayout title="Shubhankar Consulting" />


            <main className="home-page">
                <HeroCarousel />
                <OurPurpose />
                <CoreValues />
                <FeaturedClients />
                <ImpactfulIdeas />
                <ReimagineYourCareer />
                <TheCoreTeam />
            </main>
        </>
    )
}
