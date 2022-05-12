import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../config";
import { Header, Layout, Transfer } from "../components";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Header />
          <Component {...pageProps} />
          <Transfer />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
