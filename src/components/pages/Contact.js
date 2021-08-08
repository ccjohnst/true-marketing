import React from 'react';
import { Text, Grid, GridItem, Flex } from '@chakra-ui/react';
const Contact = () => {
  return (
    <Grid
      templateRows="5vh minmax(200vh, max-content) max-content"
      color="cyan.900"
    >
      <GridItem></GridItem>
      <GridItem bg="cyan.200">
        <Flex justify="center" align="center" padding="15px" direction="column">
          <Text paddingTop="10px" marginBottom="10px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ipsum
            dui, fringilla eget tempus et, lacinia nec justo. Phasellus sed erat
            varius, gravida elit ut, pharetra diam. Quisque accumsan egestas
            fermentum. Integer id nunc finibus, ullamcorper enim a, consequat
            ligula. Proin diam odio, pellentesque ut leo imperdiet, pulvinar
            iaculis velit. Nullam et luctus odio. Integer quis viverra urna. Nam
            auctor faucibus orci ac elementum. Ut non iaculis velit, ut bibendum
            metus. Pellentesque malesuada ex ut velit ultrices egestas.
            Vestibulum finibus ipsum et mollis tempor. Donec sapien nisi,
            porttitor et sapien id, mollis condimentum ipsum. Etiam mattis dui
            dictum tincidunt consequat. Etiam ultricies vitae magna sed rhoncus.
            Donec ornare odio vel eros efficitur euismod.{' '}
          </Text>
          <Text paddingTop="10px" marginBottom="10px">
            Aliquam ornare lacus nec metus egestas, at dictum ex luctus.
            Praesent dignissim purus sed cursus ornare. Vestibulum ut ligula
            bibendum, aliquet ligula sodales, hendrerit ipsum. Integer imperdiet
            est quam, sit amet sodales dolor tempor eget. Donec lacus est,
            sodales vitae libero vitae, mollis sollicitudin massa. Pellentesque
            tristique porttitor neque, eget sodales turpis suscipit sed.
            Vestibulum egestas, leo sit amet maximus rutrum, mauris nisi
            tristique mi, sit amet commodo lectus eros id dui. Vestibulum
            eleifend metus nisl, id efficitur ipsum laoreet sed. Integer quam
            sapien, porttitor eget condimentum sed, finibus eget eros. Nullam
            rutrum orci nulla, et tincidunt nisi vehicula ut. Nullam cursus leo
            nec ipsum ultrices facilisis.
          </Text>
          <Text paddingTop="10px" marginBottom="10px">
            Donec sagittis semper vulputate. In at libero ut metus vestibulum
            tempus. Phasellus non efficitur tellus. In hac habitasse platea
            dictumst. Cras lobortis neque ut fringilla consequat. Duis
            sollicitudin, ex sit amet porttitor accumsan, purus velit porta
            tellus, nec fermentum elit risus ut neque. Aliquam scelerisque nunc
            a metus condimentum, a feugiat nisi vestibulum. Praesent non
            fermentum eros, sed feugiat justo. Nulla luctus diam eget nisi
            gravida, eleifend placerat justo faucibus. Donec eu ligula urna.
            Cras id tortor porttitor, ultrices nunc sed, porta lorem. Duis
            sollicitudin, ex vulputate pellentesque tincidunt, nibh diam commodo
            tortor, in dictum risus odio eu ex. Pellentesque eu arcu eu nisi
            molestie venenatis a at magna. Donec maximus augue a cursus
            ultrices. Sed lobortis neque sed nisi vestibulum, quis bibendum
            libero ullamcorper.{' '}
          </Text>{' '}
          <Text paddingTop="10px" marginBottom="10px">
            {' '}
            Aliquam rhoncus porta facilisis. Curabitur lobortis accumsan purus,
            congue fermentum ante convallis sit amet. Sed eget lectus dui.
            Quisque gravida ante posuere risus pellentesque, at pellentesque
            urna finibus. Quisque varius nulla et elit maximus egestas. Morbi
            pretium, est et ultrices pharetra, ligula nisi auctor magna, ut
            iaculis nunc erat quis tortor. Nulla facilisi. Donec tincidunt, nibh
            nec dictum elementum, felis massa pharetra lacus, non accumsan ipsum
            sapien quis ligula. Quisque eros mi, pulvinar sed varius a, rutrum
            in diam.{' '}
          </Text>
        </Flex>
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  );
};

export default Contact;
