import React from 'react';
import {
  Box,
  Text,
  Link,
  Grid,
  GridItem,
  Flex,
  Button,
  Heading,
} from '@chakra-ui/react';
import clouds from '../cloud.svg';
import BlurbIcons from '../blurbIcons';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box fontSize="xl">
      <Grid
        templateRows={{
          base: '100vh minmax(100vh, max-content) 100vh',
          md: 'auto auto auto',
        }}
        templateColumns="100%"
      >
        {/*  */}

        {/* INTRO GRID SECTION */}
        <GridItem bg={['cyan.700']} padding="15px">
          <Grid
            templateRows={'minmax(33.3vh, 1fr) auto minmax(33.3vh, 1fr)'}
            templateColumns={{ base: '1fr', md: '1fr 1fr' }}
            justify="center"
          >
            <GridItem
              rowStart={{ base: '1', md: '2' }}
              colStart={{ base: '1', md: '2' }}
              bgSize={{ base: '70vw', md: '50%' }}
              height={{ base: '33.3vh' }}
              backgroundImage={clouds}
              bgPosition={{ base: 'right', md: 'center' }}
              bgRepeat="no-repeat"
            ></GridItem>
            <GridItem rowStart="2">
              <Flex align="center" justify="left" height="100%">
                <Text fontSize="4xl" color="cyan.900" textAlign="left">
                  Need some{' '}
                  <Text as="ins" color="cyan.50">
                    blue sky thinking
                  </Text>{' '}
                  in your business?
                </Text>
              </Flex>
            </GridItem>
            <GridItem rowStart="3" paddingTop="5vh">
              <Flex align="start" justify="left" height="100%">
                <Text fontSize="xl" text-aign="start" color="cyan.900">
                  Trusted by over 100 businesses, True Marketing can deliver
                  trust, growth and loyalty to your band. From nation-wide
                  campaigns to international transformations, we can provide you
                  with the help you need to grow your business faster and
                  stronger.
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </GridItem>
        {/* BLURB GRID SECTION */}
        <GridItem bg="cyan.100" padding="15px">
          <BlurbIcons />
        </GridItem>
        {/* CONTACT GRID SECTION */}
        <GridItem bg="cyan.50">
          <Grid
            gridTemplateColumns="repeat(10, 10vw)"
            gridTemplateRows="repeat(10, 10vh)"
            justify="center"
          >
            <GridItem
              colStart={{ base: '1' }}
              colEnd={{ base: '10' }}
              rowStart={{ base: '3' }}
              rowEnd={{ base: '10' }}
              bg="cyan.100"
              margin={{ base: '10px' }}
              marginBottom={{ base: '50px' }}
              marginTop="20px"
              marginLeft={{ md: '150px' }}
            ></GridItem>
            <GridItem
              colStart={{ base: '2' }}
              colEnd={{ base: '10' }}
              rowStart={{ base: '3' }}
              rowEnd={{ base: '9' }}
              bg="cyan.300"
              align="center"
              justifyItems="center"
              alignItems="center"
              placeItems="center"
              justifyContent="center"
              alignContent="center"
              placeContent="center"
            >
              <Flex
                align="center"
                justify="space-evenly"
                height="100%"
                direction="column"
                padding="50px"
              >
                <Text color="cyan.50">
                  Sound good? Let's talk about how we can improve your business
                </Text>
                <Heading size="lg" color="cyan.50">
                  Get in touch today
                </Heading>
                <Link
                  href="mailto:hello@truemarketing.co.uk"
                  color="cyan.50"
                  alignSelf="center"
                  justify-self="center"
                >
                  hello@truemarketing.co.uk
                </Link>

                <Button
                  colorScheme="cyan"
                  variant="solid"
                  size="lg"
                  color="cyan.50"
                >
                  <Link as={RouterLink} to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
