import type { Metadata } from "next";

import styles from "./_ui/styles/page.module.css";

const data = [
    {
        name: 'Ten Things',
        href: 'https://mstewartgallus.github.io/ten-things',
        icon: 'https://mstewartgallus.github.io/ten-things/icon/icon-192x192.png'
    },
    {
        name: 'Editor (WIP)',
        href: 'https://mstewartgallus.github.io/editor',
        icon: 'https://mstewartgallus.github.io/editor/icon/icon-192x192.png'
    },
    {
        name: 'QR Code (WIP)',
        href: 'https://mstewartgallus.github.io/qrcode',
        icon: 'https://mstewartgallus.github.io/qrcode/icon/icon-192x192.png'
    }
];

const IndexPage = () => <ul role="list" className={styles.list}>
    {
        data.map(({ name, href, icon }) =>
            <li key={name} className={styles.item}>
                <a href={href} className={styles.a}>
                   <figure className={styles.figure}>
                       <img alt="" src={icon} width={192} height={192} />
                       <figcaption className={styles.figcaption}>{name}</figcaption>
                   </figure>
               </a>
            </li>
        )
    }
</ul>;

export default IndexPage;

export const metadata: Metadata = {
  title: "Molly's Web Applications"
};
