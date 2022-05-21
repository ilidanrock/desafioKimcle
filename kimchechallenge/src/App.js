import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Header } from "./components/header/Header";
import { Button, ButtonGroup, Center, Text } from "@chakra-ui/react";

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
  const [continents, setContinents] = useState([]);
  const { loading, error, data } = useQuery(COUNTRIES);

  useEffect(() => {
    setContinents(data);
  }, [data]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Header />
      <Center>
        <ButtonGroup gap="4" alignItems="center" >
          <Text> Group by:</Text>
          <Button colorScheme="blackAlpha">Continents</Button>
          <Button colorScheme="blackAlpha">Language</Button>
        </ButtonGroup>
      </Center>
    </>
  );
};
export default App;
