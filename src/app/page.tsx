"use client"; 

import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";
import { ColorProvider } from "@/providers/ColorProvider";

const Home = () => {
  return (
    <>
      <ColorProvider>
        <Container maxW="container.xl" py={20}>
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={6}>
              Bitcoin Merchant Community
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Welcome to the Bitcoin Merchant Community platform
            </Text>
          </Box>
        </Container>
      </ColorProvider>
    </>
  );
};

export default Home;

