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

export default function ContactUs() {
    return (
        <MainLayout>
            <PageBanner
                title="Contact"
                backgroundImage="/img/background/contact-bg.jpg"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us", href: "/contact-us" },
                ]}
            />
            <ContactForm />
        </MainLayout>
    );
}

