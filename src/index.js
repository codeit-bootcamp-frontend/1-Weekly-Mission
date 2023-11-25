import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Shared from "./pages/shared/shared";
import Folder from "./pages/folder/folder";

const root = ReactDOM.createRoot(document.getElementById("root"));

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: Pretendard;
    }

    :root {
        --primary-color: #6D6AFE;
        --red-color: #FF5B56;
        --black-color: #111322;
        --white-color: #ffffff;
        --gray100-color: #3e3e43;
        --gray80-color: #9fa6b2;
        --gray60-color: #ccd5e3;
        --gray40-color: #e7effb;
        --gray20-color: #f0f6ff;
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
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
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

function Home() {
    return (
        <>
            <Link to="/shared">
                <button
                    style={{
                        width: "500px",
                        height: "500px",
                        fontSize: "100px",
                    }}
                >
                    shared page
                </button>
            </Link>
            <Link to="/folder">
                <button
                    style={{
                        width: "500px",
                        height: "500px",
                        fontSize: "100px",
                    }}
                >
                    folder page
                </button>
            </Link>
        </>
    );
}

function NotFound() {
    return (
        <div style={{ fontSize: "300px", color: "red" }}>
            Not Found!!!!!!!!!
        </div>
    );
}

root.render(
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shared" element={<Shared />} />
            <Route path="/folder" element={<Folder />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);
