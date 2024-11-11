import { siteConfig } from "@/lib/datas/metaDatas";
import Link from "next/link";

export default function PrivacyPolicy() {
    const currentYear = new Date().getFullYear();
    return (
        <section>
            <div className="section-wrapper">
                <h2 className="text-left">Who We Are</h2>
                <p>I am Salman Mallick from India.</p>
                <p>Our website address is: https://mallickwebstudio.com.</p>

                <h2 className="text-left">Personal Information Collection</h2>
                <p>We do not personally collect any personal information from you unless you voluntarily provide it through the forms you fill out.</p>


                <h2 className="text-left">Who We Share Your Data With</h2>
                <p>
                    This website is build with Nextjs (react framework) and deployed on <Link className="text-link" href="https://vercel.com/legal/privacy-policy"> vercel.com</Link>.
                    The form used is form  <Link className="text-link" href="https://formspree.io/legal/privacy-policy/">formspree.io</Link>.
                    We use <Link className="text-link" href="https://search.google.com">Google search console</Link> and <Link className="text-link" href="https://analytics.google.com">Google analytics</Link> to monitor and analyze our website&apos;s performance in Google search results.
                </p>

                <h2 className="text-left">Copyright Notice</h2>
                <p>&copy;{currentYear} {siteConfig.name}. All rights reserved.</p>
            </div>
        </section>
    )
}
