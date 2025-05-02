import MainLayout from "./../layouts/MainLayout";
import Image from "next/image";
import Hero from "./../components/Hero";
import Services from "./../components/Services";
import Cta from "./../components/Cta";
import RecentBlogs from "./../components/Recent-Blogs";
import Testimonials from "./../components/Testimonials";
import Teams from "./../components/Teams";
import Process from "./../components/Process";
import Partners from "./../components/Partners";
import WhyChoose from "./../components/Why-Choose";
import WhoWeAre from "./../components/Who-We-Are";
import PageBanner from "../components/Page-Banner";
import ContactSection from "../components/Contact-Section";
import ContactForm from "../components/Contact-Form";
import AboutSection from "../components/About-Section";

export default function AboutUs() {
    return (
        <MainLayout>
            <PageBanner
                title="Our Mission"
                backgroundImage="/img/footer-bg.jpg"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Mission", href: "/mission" },
                ]}
            />
            <AboutSection />
            <Cta />
        </MainLayout>
    );
}

