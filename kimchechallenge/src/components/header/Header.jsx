
import { Box, Button, Center } from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";

export const Header = ({ handleOnChangeInput, input }) => {
  const basicBoxStyles = {
    position: "relative",
    background:
      "url(https://user-images.githubusercontent.com/70895686/169180589-d3a86506-50de-4efa-8942-2d75514904f4.jpg) center/cover no-repeat",
    w: "100%",
    h: "32rem",
    objectFit: "cover",
    borderBottomLeftRadius: "12%",
    borderBottomRightRadius: "12%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textShadow: "0px 3px 11px #18151c8a"
  };
  const center = {
    display: "flex",
    flexDirection: "column",
  };
  const inputStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
  };
  const wellcome = {
    fontSize: "4rem",
    textAlign: "center",
    paddingBottom: "3rem",
  };

  return (
    <Box sx={basicBoxStyles}>
      <Center sx={wellcome} fontFamily="heading" color="800">
        Welcome to CountryFinder
      </Center>
      <Center h="100px" display="flex" sx={center}>
        <Box sx={inputStyle}>
          <Input
            placeholder="Find your country"
            onChange={(e) => handleOnChangeInput(e)}
            name="country"
            value={input.country}
          />
          <Button colorScheme="blue" onClick={()=> console.log("SE activa")} >Button</Button>
        </Box>
      </Center>
    </Box>
  );
};
