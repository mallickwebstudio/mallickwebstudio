import { siteConfig } from "@/lib/datas/metaDatas";

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
    }
}