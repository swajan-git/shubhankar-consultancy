import Head from 'next/head'
import Image from 'next/image'
import CoreValues from '../components/HomePageComponents/CoreValues'
import FeaturedClients from '../components/HomePageComponents/FeaturedClients'
import ReimagineYourCareer from '../components/HomePageComponents/ReimagineYourCareer'
import YouTubeResponsiveEmbed from '../components/shared/YouTubeResponsiveEmbed'
import { siteLink } from '../shared/data'

export default function Home() {
    return (
        < >
            <Head>
                <title>Shubhankar Consultancy</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="home-page">
                <section className="our-purpose py-5">
                    <div className="container my-4">
                        <div className="row">
                            <div className="col-md-8 text-center offset-md-2">
                                <h1 className="font-weight-900 mb-4">
                                    Our Purpose
                                </h1>
                                <p className="font-18">
                                    Shubhankar Consulting assists clients in growing and transforming their organizations by designing diverse and personalized business policies and procedures, and then integrating them with technology, strategy, and operational excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <CoreValues />
                <FeaturedClients/>
                <ReimagineYourCareer/>
            </main>
        </>
    )
}
