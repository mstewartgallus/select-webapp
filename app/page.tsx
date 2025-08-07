import type { Metadata } from "next";

const IndexPage = () => <ul>
    <li><a href="https://mstewartgallus.github.io/ten-things">Ten Things</a></li>
    <li><a href="https://mstewartgallus.github.io/editor">Editor</a></li>
</ul>;

export default IndexPage;

export const metadata: Metadata = {
  title: "Molly's Web Applications"
};
