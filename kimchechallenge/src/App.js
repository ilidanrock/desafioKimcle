import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Header } from "./components/header/Header";
import { Box, Button, ButtonGroup, Center, Text } from "@chakra-ui/react";

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


  const [continents, setContinents] = useState([]);
  const [input, setInput] = useState({ country: "" });
  const [filterContinent, setFilterContinent] = useState(false)
  const [filterLanguage, setFilterLanguage] = useState(false)
  
  

  useEffect(() => {
    setContinents(data);
  }, [data]);

  const handleOnChangeInput = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const finder = (country) => {

  }

  const click1 = () => {
    setFilterContinent(!filterContinent)
    if (filterLanguage) {
      setFilterLanguage(!filterLanguage)
    }
  }
  const click2 = () => {
    setFilterLanguage(!filterLanguage)
    if (filterContinent) {
      setFilterContinent(!filterContinent)
    }
  }

  if (error) return `Error! ${error.message}`;

  return (
    <>
    { !loading? 
    <Box>  
     <Header handleOnChangeInput={handleOnChangeInput} input={input} />
      <Center>
        <ButtonGroup
          gap="4"
          alignItems="center"
          marginTop="1.5rem"
          marginBottom="1.5rem"
          fontSize="1.6rem"
        >
          <Text> Group by:</Text>
          <Button
            colorScheme="blackAlpha"
            backgroundColor={ filterContinent?  "blue" : "blackAlpha.500"}
            _focus={{
              backgroundColor: "blue",
            }}
            _hover={{ bg: filterContinent? "blue" : "blackAlpha.500"}}
            onClick={()=>click1()}
          >
            Continents
          </Button>
          <Button
            colorScheme="blackAlpha"
            backgroundColor={ filterLanguage?  "blue" : "blackAlpha.500"}
            _focus={{
              backgroundColor: "blue",
            }}
            _active={{
              backgroundColor: "blue",
            }}
            _hover={{ bg: filterLanguage? "blue" : "blackAlpha.500"}}
            onClick={()=>click2()}
          >
            Language
          </Button>
        </ButtonGroup>
      </Center>
      </Box>  : <h1>Loading...</h1>}
    </>
  );
};
export default App;
