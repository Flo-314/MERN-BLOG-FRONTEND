import {Box, Heading, Text, Button, Flex} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";

function Presentation() {
  return (
    <section id="presentationSection">
      <Box bg={"primary.light"} width={"100%"}>
        <Flex
          className="ColumnMobile"
          gap={20}
          margin={"0 auto"}
          maxW={"1500px"}
          paddingTop={10}
          width={"80%"}
        >
          <Flex direction={"column"} marginTop="5em">
            <Text color={"text.grayer"} fontSize={18}>
              Blog para complementar la REST API de Express.js y mongoDB
            </Text>
            <Heading fontSize={55} fontWeight={"black"} paddingBottom={7} paddingTop={3}>
              Un Blog para apuntarse un poroto al Portfolio
            </Heading>
            <Text paddingBottom={10}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dignissimos fugit,
              architecto velit, porro laborum optio, quibusdam debitis iusto sequi dolorum assumenda
              necessitatibus accusantium quisquam eum ex sit quidem doloribus.
            </Text>
            <a href="/blog/Un blog para apuntarse un poroto al porfolio">
              <Button
                bg={"primary.light"}
                border="2px"
                borderColor="secondary.strong"
                borderRadius={11}
                maxH="3.5em"
                maxW="320px"
                minW="250px"
                position={"inherit"}
              >
                Read More
              </Button>
            </a>
          </Flex>

          <Flex marginTop="2em">
            <Image
              borderRadius={20}
              height={"110%"}
              maxHeight={"1100px"}
              src="../images/hireme.jpeg"
              width={"100%"}
            />
          </Flex>
        </Flex>
      </Box>
    </section>
  );
}

export default Presentation;
