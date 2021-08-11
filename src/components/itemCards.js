import React from 'react';
import { Heading, Grid, GridItem, Flex } from '@chakra-ui/react';
import appDevelopment from './pages/service-images/appdevelopment.png';
import digitalContent from './pages/service-images/digitalcontent.jpg';
import digitalTransformation from './pages/service-images/digitaltransformation.webp';
import marketCaseStudies from './pages/service-images/marketcasestudies.jpg';
import marketDevelopment from './pages/service-images/marketdevelopment.jpeg';
import marketing from './pages/service-images/marketing.jpg';
import webDevelopment from './pages/service-images/webdevelopment.jpeg';

const services = [
  { serviceName: 'Digital Content', image: digitalContent, key: '1' },
  { serviceName: 'Marketing', image: marketing, key: '2' },
  { serviceName: 'Web Development', image: webDevelopment, key: '3' },
  { serviceName: 'App Development', image: appDevelopment, key: '4' },
  {
    serviceName: 'Digital Transformation',
    image: digitalTransformation,
    key: '5',
  },
  {
    serviceName: 'Market Case Studies',
    image: marketCaseStudies,
    key: '6',
  },
  { serviceName: 'Market Development', image: marketDevelopment, key: '7' },
];
const AllItemCards = () => {
  return (
    <Grid
      gridTemplateRows={{ base: 'repeat(7, 1fr)', md: '1fr' }}
      gridTemplateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
      gap={5}
      color="cyan.50"
    >
      {services.map(item => {
        const { serviceName, image, key } = item;
        return (
          <>
            <ItemCard name={serviceName} image={image} key={key} />
          </>
        );
      })}
    </Grid>
  );
};

const ItemCard = ({ name, image }) => {
  return (
    <GridItem
      backgroundImage={image}
      height="30vh"
      width="100%"
      bgSize="cover"
      borderRadius="10px"
      align="end"
    >
      <Flex justify="left" height="100%">
        <Heading
          placeSelf="end"
          textShadow=" 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;"
        >
          {name}
        </Heading>
      </Flex>
    </GridItem>
  );
};
export default AllItemCards;
