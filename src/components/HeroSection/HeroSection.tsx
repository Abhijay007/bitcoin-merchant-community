"use client";

import React from 'react';
import { Box, Heading, Text, Button, Flex, Image, Container } from '@chakra-ui/react';

const HeroSection = () => {
    return (
        <Box 
            bg="#F5F5F5" 
            py={{ base: "60px", md: "80px", lg: "100px" }}
            px={{ base: "20px", md: "40px", lg: "60px" }}
        >
            <Container maxW="1300px">
                <Flex 
                    direction={{ base: "column", lg: "row" }}
                    align="center"
                    justify="space-between"
                    gap={{ base: "40px", lg: "60px" }}
                >
                    {/* Left Side - Text Content */}
                    <Box 
                        flex="1" 
                        maxW={{ base: "100%", lg: "550px" }}
                    >
                        <Heading 
                            as="h1"
                            fontSize={{ base: "40px", md: "56px", lg: "72px" }}
                            fontWeight="900"
                            lineHeight="1.1"
                            mb={6}
                            color="black"
                        >
                            We help small businesses keep more of their profit.
                        </Heading>

                        <Text 
                            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                            lineHeight="1.6"
                            mb={8}
                            color="black"
                        >
                            The Bitcoin Merchant Community is a growing global community of small businesses helping one another defeat{' '}
                            <Text as="span" color="#00A651" fontWeight="700">
                                3% credit card fees
                            </Text>{' '}
                            by accepting bitcoin.
                        </Text>

                        {/* Buttons */}
                        <Flex 
                            gap={3} 
                            direction="row"
                            flexWrap="wrap"
                            align="center"
                        >
                            <Button
                                bg="#FFC533"
                                color="black"
                                fontSize="16px"
                                fontWeight="700"
                                textTransform="uppercase"
                                width="326px"
                                height="46px"
                                borderRadius="5px"
                                border="2px solid #000"
                                flexShrink={0}
                                boxSizing="border-box"
                                _hover={{
                                    bg: "#E8B02E"
                                }}
                                transition="all 0.2s"
                            >
                                LEARN HOW TO ACCEPT BITCOIN
                            </Button>

                            <Button
                                bg="white"
                                color="black"
                                fontSize="16px"
                                fontWeight="700"
                                textTransform="uppercase"
                                width="326px"
                                height="46px"
                                borderRadius="5px"
                                border="2px solid #000"
                                flexShrink={0}
                                boxSizing="border-box"
                                _hover={{
                                    bg: "#F0F0F0"
                                }}
                                transition="all 0.2s"
                            >
                                JOIN OUR FACEBOOK COMMUNITY
                            </Button>
                        </Flex>
                    </Box>

                    {/* Right Side - 3D Image */}
                    <Box 
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image 
                            src="/assets/HeroImages/HeroImage.png"
                            alt="3% melting"
                            maxW={{ base: "500px", md: "400px", lg: "750px" }}
                            w="100%"
                            h="auto"
                        />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default HeroSection;

