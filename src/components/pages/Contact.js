import React from 'react';
import {
  Text,
  Grid,
  GridItem,
  Flex,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
const Contact = () => {
  return (
    <Grid
      templateRows={'minmax(20vh, max-content) minmax(100vh, max-content)'}
      templateColumns="100%"
      color="cyan.900"
    >
      <GridItem bg="cyan.700">
        <Flex justify="center" padding="15px" direction="column" height="100%">
          <Heading color="cyan.50" size="4xl">
            Contact Us.
          </Heading>
        </Flex>
      </GridItem>
      <GridItem>
        <GridItem bg="cyan.50">
          <Grid
            gridTemplateColumns="repeat(10, 10vw)"
            gridTemplateRows="minmax(2vh, max-content) repeat(8, minmax(12vh, max-content)) 2vh"
            justify="center"
          >
            <GridItem
              colStart="1"
              colEnd="10"
              rowStart="2"
              rowEnd="11"
              bg="cyan.100"
              margin="10px"
              marginTop="20px"
            ></GridItem>
            <GridItem
              colStart="2"
              colEnd="10"
              rowStart="2"
              rowEnd="10"
              bg="cyan.300"
            >
              <Flex
                align="start"
                justify="space-evenly"
                height="100%"
                direction="column"
                padding="50px"
              >
                <Text lineHeight="30px" letterSpacing="1px">
                  We'd love to share with you the ways in which we can
                  revolutionise your business. Please feel free to get in touch
                  with us using the form below.
                </Text>
                <FormControl id="fname" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="lname" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>

                <FormControl id="message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea />
                </FormControl>
                <Button type="Submit" width="100%">
                  Submit
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </GridItem>
      </GridItem>
    </Grid>
  );
};

export default Contact;
