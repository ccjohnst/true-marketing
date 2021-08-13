import React from 'react';
import { Grid, GridItem, Text, Flex } from '@chakra-ui/react';
import AllItemCards from '../itemCards';

const Services = () => {
  return (
    <Grid
      templateRows="minmax(5vh, auto) minmax(50vh, max-content) "
      templateColumns="100%"
    >
      <GridItem bg="cyan.700" padding="15px">
        <Flex
          direction="column"
          justify="center"
          height="100%"
          color="cyan.900"
        >
          <Text fontSize="4xl">
            Thinking{' '}
            <Text color="cyan.50" as="ins">
              differently.
            </Text>
          </Text>
          <Text fontSize="4xl">Growing businesses around the world.</Text>
        </Flex>
      </GridItem>
      <GridItem bg="cyan.50">
        <Flex
          direction="column"
          padding="15px"
          height="100%"
          justify="space-evenly"
          align="center"
        >
          <Text fontSize="4xl" color="cyan.900">
            Our Services
          </Text>
          <Text padding="15px">
            Unlike traditional marketing agencies, we combine a number of
            different traditional and digital techniques. We provide every
            client with their own dedicated digital marketing expert in order to
            help faciliate their growth
          </Text>
          <Text padding="15px">
            If you're seeking for rapid growth, we have options for large teams
            dedicated to providing you 24/7 marketing support over a wide range
            of regions
          </Text>
          <AllItemCards />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Services;
