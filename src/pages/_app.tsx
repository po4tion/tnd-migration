import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../config";
import { Header, Layout, Transfer } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Transfer />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
