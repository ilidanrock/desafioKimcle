import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Header } from "./components/header/Header";

const App = () => {
  const COUNTRIES = gql`
    query MyQuery {
      continents {
        name
        countries {
          name
          emoji
          emojiU
          capital
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(COUNTRIES);
  if(loading) return <h1>Loading...</h1>
  if (error) return `Error! ${error.message}`;
  
  const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
  const theme = extendTheme({ colors })
  return (
    <ChakraProvider theme={theme} >
      <Header/>
    </ChakraProvider>
  );
};
export default App;
