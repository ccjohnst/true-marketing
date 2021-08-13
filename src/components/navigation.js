import React from 'react';
import {
  Image,
  Flex,
  Box,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import tmlogo from '../tmlogo.png';
import hamburger from '../menu.svg';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const NavigationBar = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="stretch"
      justify="space-between"
      wrap="wrap"
      flexGrow="0"
      // padding={6}
      p={6}
      // pr="10px"
      // pl="10px"
      bg="cyan.700"
      color="cyan.50"
      position={{ base: 'fixed', md: 'absolute' }}
      width={{ base: '100vw', md: '100vw' }}
      {...props}
    >
      <Flex align="center" width={{ base: '50%', md: '50%' }} marginTop="0">
        <Link as={RouterLink} to="/">
          <Image
            src={tmlogo}
            height={{ base: '50%', md: '100%' }}
            width={{ base: '100%', md: '20%' }}
          ></Image>
        </Link>
      </Flex>

      <Box
        display={{ base: 'block', md: 'none' }}
        onClick={handleToggle}
        alignSelf="center"
      >
        <Image src={hamburger}></Image>
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justify="end"
        flexGrow={1}
        p={6}
        mt={{ base: 4, md: 0 }}
        fontSize="xl"
        spacing="24px"
        fontWeight="bold"
      >
        <Text>
          <Link as={RouterLink} to="/">
            Home
          </Link>
        </Text>
        <Text>
          {' '}
          <Link as={RouterLink} to="/about">
            About
          </Link>
        </Text>

        <Text>
          {' '}
          <Link as={RouterLink} to="/services">
            Services
          </Link>
        </Text>

        <Text>
          {' '}
          <Link as={RouterLink} to="/contact">
            Contact
          </Link>
        </Text>
      </Stack>
    </Flex>
  );
};

export default withRouter(NavigationBar);
