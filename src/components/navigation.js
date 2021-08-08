import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Flex,
  Spacer,
  Box,
  Link,
} from '@chakra-ui/react';
import tmlogo from '../tmlogo.png';
import hamburger from '../menu.svg';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Box pos="fixed" top="0" left="0" bg="cyan.700">
      <Menu placement="auto">
        <Flex margin="10px" align="center">
          <Image src={tmlogo} boxSize="50%" />
          <Spacer />
          <MenuButton>
            <Image src={hamburger} boxSize="80%"></Image>
          </MenuButton>
          <MenuList
            w="100vw"
            bg="cyan.200"
            color="cyan.900"
            borderRadius="0px"
            borderTopColor="cyan.900"
            borderWidth="4px 0px 0px 0px"
          >
            <MenuItem>
              <Link as={RouterLink} to="/">
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link as={RouterLink} to="/about">
                About
              </Link>
            </MenuItem>
            <MenuItem>
              <Link as={RouterLink} to="/services">
                Services
              </Link>
            </MenuItem>
            <MenuItem>
              <Link as={RouterLink} to="/contact">
                Contact
              </Link>
            </MenuItem>
          </MenuList>
        </Flex>
      </Menu>
    </Box>
  );
};

export default withRouter(NavigationBar);
