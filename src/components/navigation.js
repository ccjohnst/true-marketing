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
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="cyan.700"
      color="cyan.50"
      position="fixed"
      width={{ base: '100vw', md: '100vw' }}
      {...props}
    >
      <Flex align="center" mr={5} width={{ base: '50%', md: '20%' }}>
        <Link as={RouterLink} to="/">
          <Image src={tmlogo} width={{ base: '50' }}></Image>
        </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <Image src={hamburger}></Image>
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justify="end"
        flexGrow={1}
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
