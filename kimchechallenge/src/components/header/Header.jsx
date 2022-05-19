import { Box, Button, Center } from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";

export const Header = () => {
  const basicBoxStyles = {
    position: "relative",
    background:
      "url(https://user-images.githubusercontent.com/70895686/169180589-d3a86506-50de-4efa-8942-2d75514904f4.jpg) center/cover no-repeat",
    w: "100%",
    h: "32rem",
    objectFit: "cover",
    borderBottomLeftRadius: "12%",
    borderBottomRightRadius: "12%",
  };
  const inputStyles = {
    w: "20rem",
    background: "white"
  };
  return (
    <Box sx={basicBoxStyles}>
      <Center h="100px" display='flex'>
        <Input sx={inputStyles} placeholder="medium size"  />
        <Button colorScheme='blue'>Button</Button>
      </Center>
    </Box>
  );
};
