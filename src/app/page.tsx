import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cta from "./components/Cta";
import RecentBlogs from "./components/Recent-Blogs";
import Testimonials from "./components/Testimonials";
import Teams from "./components/Teams";
import Process from "./components/Process";
import Partners from "./components/Partners";
import WhyChoose from "./components/Why-Choose";
import WhoWeAre from "./components/Who-We-Are";

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <Services />
            <WhoWeAre />
            <WhyChoose />
            <Process />
            <Partners />
            <Teams />
            <Testimonials />
            <RecentBlogs />
            <Cta />
        </MainLayout>
    );
}

