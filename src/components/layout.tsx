import Nav from "./nav";
import type { ReactNode } from 'react';

// interface Properties {
//     categories;
//     children: ReactNode;
//     seo: ReactNode;
// };

const Layout = ({ children, categories, seo }) => (
    <>
        <Nav categories={categories} />
        {children}
    </>
);

export default Layout;