import {Flex, Heading, Box, Spinner} from "@chakra-ui/react";
import {v4 as uuid} from "uuid";

import LatestArticle from "./LatestArticle";

function LatestsArticles({Posts}) {
  return (
    <section id="LatestsArticles">
      <Box bg={"white"} width={"100%"}>
        <Flex
          direction={"column"}
          margin={"0 auto"}
          maxW={"1500px"}
          paddingBottom={20}
          width={"80%"}
        >
          <Heading>Latest Articles</Heading>
          <hr className="strongLine" />
          <Flex
            alignItems={"center"}
            direction={"column"}
            gap={20}
            justify={"center"}
            marginTop={10}
          >
            {Posts === undefined && (
              <Spinner
                color="blue.500"
                emptyColor="gray.200"
                margin={"0 auto"}
                position="static"
                size="xl"
                speed="0.65s"
                thickness="8px"
              />
            )}
            {Posts !== undefined &&
              Posts.map((post) => {
                return <LatestArticle key={uuid()} Post={post} />;
              })}
          </Flex>
        </Flex>
      </Box>
    </section>
  );
}

export default LatestsArticles;
