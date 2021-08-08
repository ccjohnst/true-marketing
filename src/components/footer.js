import React from 'react';
import { Flex, Text, Image, Spacer } from '@chakra-ui/react';
import smallLogo from './tmlogosmall.png';

const Footer = () => {
  return (
    <Flex
      bg="cyan.700"
      height="100%"
      padding="15px"
      color="white"
      direction="rows"
    >
      <Image src={smallLogo} height="27.62px" width="40.62pxx" />
      <Spacer />
      <Text size="sm">©2021 True Marketing</Text>
    </Flex>
  );
};

export default Footer;
