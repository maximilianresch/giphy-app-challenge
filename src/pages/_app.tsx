import { ChakraProvider, Box,  } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import theme from "../theme";
import { AppProps } from "next/app";
import React from "react";
import { Navigation } from "../components/Navigation";
import { DarkModeSwitch } from "../components/DarkModeSwitch";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Box d="flex" justifyContent="flex-end" m="2" alignItems="center">
          <DarkModeSwitch />
          <Navigation />
        </Box>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
