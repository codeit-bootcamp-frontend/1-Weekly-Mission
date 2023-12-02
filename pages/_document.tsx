import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <link
                rel="stylesheet"
                as="style"
                href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
            />
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
