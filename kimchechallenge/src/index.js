import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { InMemoryCache } from "apollo-boost";
import "@fontsource/roboto-serif";
import "@fontsource/open-sans";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com/",
});

const obj = {
  colors: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  fonts: {
    heading: "roboto-serif",
  },
};
const theme = extendTheme( obj );
ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
