import type { Metadata } from "next";

import styles from "./_ui/styles/page.module.css";

const demos = [
    {
        name: 'Ten Things',
        href: 'https://mstewartgallus.github.io/ten-things',
        icon: 'https://mstewartgallus.github.io/ten-things/icon/icon-192x192.png'
    },
    {
        name: 'QR Code',
        href: 'https://mstewartgallus.github.io/qrcode',
        icon: 'https://mstewartgallus.github.io/qrcode/icon/icon-192x192.png'
    }
];

const wip = [
    {
        name: 'Food Service',
        href: 'https://molly-food-f95a2fbf1865.herokuapp.com/',
        icon: 'https://molly-food-f95a2fbf1865.herokuapp.com/icon/icon-192x192.png'
    },
    {
        name: 'Editor',
        href: 'https://mstewartgallus.github.io/editor',
        icon: 'https://mstewartgallus.github.io/editor/icon/icon-192x192.png'
    }
];

const IndexPage = () =>
    <>
    <section>
    <h1>Demos</h1>
    <ul role="list" className={styles.list}>
    {
        demos.map(({ name, href, icon }) =>
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
    </ul>
    </section>
    <section>
    <h2>Work In Progress</h2>
    <ul role="list" className={styles.list}>
    {
        wip.map(({ name, href, icon }) =>
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
    </ul>
    </section>
    </>;

export default IndexPage;

export const metadata: Metadata = {
  title: "Molly's Web Applications"
};
