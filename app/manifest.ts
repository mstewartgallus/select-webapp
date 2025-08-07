import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const manifest: () => MetadataRoute.Manifest = () => ({
    name: 'Web Apps',
    short_name: 'Apps',
    description: 'Bundles webapps together',
    start_url: process.env.PAGES_BASE_PATH,
    display: 'standalone',
    background_color: '#1A0F00',
    theme_color: '#FFEEDD',
    icons: [32, 192, 512].map(size => ({
        src: `${process.env.PAGES_BASE_PATH}/icon/icon-${size}x${size}.png`,
        sizes: `${size}x${size}`,
        type: 'image/png'
    }))
});

export default manifest;
