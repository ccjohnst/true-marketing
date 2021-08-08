import React from 'react';
import { Grid, GridItem, Text, Image, Heading } from '@chakra-ui/react';
import biceps from './biceps.svg';
import brain from './brain.svg';
import speed from './speed.svg';

// Array of objects containing blurb text
let blurbs = [
  {
    imageDesc: brain,
    heading: 'Smarter Advertising',
    subHeading: 'Market research and world-beating data analysis',
    summary:
      'Our world-beating data analysis will allow you to exponentially expand your market reach',
  },
  {
    imageDesc: biceps,
    heading: 'Strengthen your business and grow',
    subHeading: 'With our unique perspective, you will grow your customer-base',
    summary:
      'Unique industry insights will allow you to penetrate markets across the globe ',
  },
  {
    imageDesc: speed,
    heading: 'Advertise Fast',
    subHeading: 'Roll out Fast advertising campaigns',
    summary:
      'We are unique in being able to roll out fast and effective advertising campaigns',
  },
];

// Component that renders all blurb objects into BlurbIcons
const BlurbIcons = () => {
  return (
    <Grid
      gridTemplateRows="repeat(3, minmax(1fr, max-content))"
      align="start"
      justify="start"
      placeItems="start"
      gap={5}
    >
      {blurbs.map(item => {
        const { imageDesc, heading, subHeading, summary } = item;
        return (
          <>
            <BlurbIcon
              imageDesc={imageDesc}
              heading={heading}
              subHeading={subHeading}
              summary={summary}
            />
          </>
        );
      })}
    </Grid>
  );
};

// Component to render individual blurbs
const BlurbIcon = ({ imageDesc, heading, subHeading, summary }) => {
  return (
    <GridItem>
      <Image
        color="cyan.500"
        src={imageDesc}
        boxSize="70px"
        border="2px"
        borderRadius="full"
        borderStyle="solid"
        padding="10px"
        marginBottom="10px"
      ></Image>
      <Heading
        color="cyan.500"
        as="h3"
        size="xl"
        paddingTop="10px"
        paddingBottom="10px"
      >
        {heading}
      </Heading>
      <Heading
        as="h4"
        size="lg"
        color="cyan.400"
        paddingTop="10px"
        paddingBottom="10px"
      >
        {subHeading}
      </Heading>
      <Text size="md" paddingTop="10px" paddingBottom="10px">
        {summary}
      </Text>
    </GridItem>
  );
};
export default BlurbIcons;
