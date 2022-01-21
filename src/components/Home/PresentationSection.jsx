import {Box, Heading, Text, Button, Flex} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";

function Presentation() {
  return (
    <section id="presentationSection">
      <Flex>
        <Flex direction={"column"}>
          <Box>Blog para complementar la REST API</Box>
          <Heading>Un blog para apuntarse un poroto</Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dignissimos fugit,
            architecto velit, porro laborum optio, quibusdam debitis iusto sequi dolorum assumenda
            necessitatibus accusantium quisquam eum ex sit quidem doloribus.
          </Text>
          <Button>Read More</Button>
        </Flex>
        <Box>
          <Image />
        </Box>
      </Flex>
    </section>
  );
}

export default Presentation;
