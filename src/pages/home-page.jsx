import { AppDetails } from "../cmps/app-details";
import { AppFooter } from "../cmps/app-footer";
import { GetStarted } from "../cmps/get-started";
import { HomePageHero } from "../cmps/home-page-hero";
import { SuccessStories } from "../cmps/success-stories";



export function HomePage() {

    return (
        <section className="main-layout">
            <HomePageHero />
            <AppDetails />
            <SuccessStories />
            <GetStarted />
            <AppFooter />
        </section>
    )
}
