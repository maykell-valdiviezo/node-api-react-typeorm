import React, {Fragment, FunctionComponent, ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (<Fragment>{children}</Fragment>)
}

export default Layout;