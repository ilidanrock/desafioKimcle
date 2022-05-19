import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com/"
});

console.log(client);

ReactDOM.render(
  <ApolloProvider client={client} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
