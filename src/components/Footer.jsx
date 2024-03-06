import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" p={5} bg="teal.500" color="white" textAlign="center" position="absolute" bottom="0" left="0">
      <Text>&copy; {new Date().getFullYear()} My React App. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
