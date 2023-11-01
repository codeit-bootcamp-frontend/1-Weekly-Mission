import React from "react";
import ReactDOM from "react-dom";
import "./components/common/reset.css";
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
