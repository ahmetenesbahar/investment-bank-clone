import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import { SidebarProvider } from "@/context/SidebarContext";
import { PageProvider } from "@/context/PageContext";

if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
  import("../mocks").then(({ setupMocks }) => {
    setupMocks();
  });
}

function App({ Component, pageProps }: AppProps) {
  return (
    <PageProvider>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </PageProvider>
  );
}

export default appWithTranslation(App);
