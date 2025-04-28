import Image from "next/image";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface PageBannerProps {
    title: string;
    backgroundImage: string;
    breadcrumb: BreadcrumbItem[];
}

export default function PageBanner({
    title,
    backgroundImage,
    breadcrumb,
    }: PageBannerProps) {
    return (
        <div
            className="inner-page-hero"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container">
                <div className="hero-heading-title">
                    <h1 className="text-white">{title}</h1>
                </div>
                <ul className="bradcrumb">
                    {breadcrumb.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
