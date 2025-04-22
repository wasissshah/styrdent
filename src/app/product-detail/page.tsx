import MainLayout from "./../layouts/MainLayout";
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
import ProductSection from "../components/Product-Section";
import ProductSectionTwo from "../components/Product-Section-Two";

export default function AboutUs() {
    return (
        <MainLayout>
            <PageBanner
                title="Product"
                backgroundImage="/img/background/about-hero-bg.jpg"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Product", href: "#" },
                ]}
            />
            <ProductSection />
            <ProductSectionTwo />
            <Cta />
        </MainLayout>
    );
}

