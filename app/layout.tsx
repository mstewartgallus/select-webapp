import type { ReactNode } from "react";

import "./_ui/styles/globals.css";

interface Props {
    children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
    return <html lang="en">
        <body>
            <main>
               {children}
            </main>
         </body>
    </html>;
};

export default RootLayout;
