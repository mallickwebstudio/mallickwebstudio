import { siteConfig } from "@/lib/datas/metaDatas";

const baseUrl = siteConfig.baseUrl

export default function sitemap() {
    return [
        {
            url: baseUrl,
        },
        {
            url: `${baseUrl}/about`,
        },
        {
            url: `${baseUrl}/services`,
        },
        {
            url: `${baseUrl}/portfolio`,
        },
        {
            url: `${baseUrl}/contact`,
        },
        {
            url: `${baseUrl}/hire`,
        },
        {
            url: `${baseUrl}/privacy-policy`,
        },
        {
            url: `${baseUrl}/services/website-design-development`,
        },
        {
            url: `${baseUrl}/services/website-updates`,
        },
        {
            url: `${baseUrl}/services/speed-optimization`,
        },
    ]
}