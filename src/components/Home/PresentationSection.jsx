import {Box, Heading, Text, Button, Flex, Link} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

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
            <Text color={"#756d68"} fontSize={18}>
              Blog para complementar la REST API de Express.js y mongoDB
            </Text>
            <Heading fontSize={55} fontWeight={"black"} paddingBottom={7} paddingTop={3}>
              <Link as={RouteLink} to={"/about"}>
                Un Blog para apuntarse un poroto al Portfolio
              </Link>
            </Heading>
            <Text fontWeight={600} paddingBottom={10}>
              FRONTEND FOR USER / FRONTEND FOR ADMINS MADE WITH: React, React Router, Chakra Ui.
              REST API MADE WITH: Node.js, Express.js, Passport, JWT token Authentication Lorem
            </Text>
            <Link as={RouteLink} to={"/about"}>
              <Button
                bg={"primary.light"}
                border="2px"
                borderColor="secondary.strong"
                borderRadius={11}
                marginBottom={"10"}
                maxH="3.5em"
                maxW="320px"
                minW="250px"
                position={"inherit"}
              >
                About This
              </Button>
            </Link>
          </Flex>

          <Flex marginTop="2em">
            <Link as={RouteLink} to={"/about"}>
              <Image
                alt="Gauchito goncy"
                borderRadius={20}
                height={"110%"}
                maxHeight={"1100px"}
                src="https://pbs.twimg.com/media/FJlInE-XoAgJzUH?format=jpg&name=4096x4096"
                width={"100%"}
              />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </section>
  );
}

export default Presentation;
