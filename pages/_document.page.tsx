import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id="modal-root"></div>
        <div id="portal-root"></div>
        <NextScript />
      </body>
    </Html>
  );
}
