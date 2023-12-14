import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";

type AppLayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
