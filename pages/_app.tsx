import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Header from "@/component/common/header";
import Footer from "@/component/common/footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <GlobalStyle />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    :root {
        --primary: #6D6AFE;
        --red: #FF5B56;
        --black: #111322;
        --white: #ffffff;
        --gray100: #3e3e43;
        --gray60: #9fa6b2;
        --gray20: #ccd5e3;
        --gray10: #e7effb;
        --bg: #f0f6ff;
    }

    a {
        text-decoration: none;
        color: #000;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, div, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, div {
        display: block;
    }
    body {
        line-height: 1;
        font-family: "Pretendard";
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;
