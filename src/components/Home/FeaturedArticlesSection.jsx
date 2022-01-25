import {Box, Flex, Heading, Grid, GridItem, Spinner} from "@chakra-ui/react";
import {v4 as uuid} from "uuid";

import FeaturedArticle from "./FeaturedArticle";
function FeaturedSection({Posts}) {
  return (
    <section id="FeaturedArticles">
      <Box bg={"white"} marginTop={10} paddingTop="250">
        <Flex
          direction={"column"}
          margin={"0 auto"}
          maxW={"1500px"}
          paddingBottom={40}
          width={"80%"}
        >
          <Heading marginBottom={"3"}>Featured Articles </Heading>
          <hr className="strongLine" />
          <Grid
            className="mobileGridRows"
            gap={10}
            templateColumns="repeat(3, 1fr)"
            templateRows="1fr"
            width={"100%"}
          >
            {Posts === undefined && (
              <Spinner
                color="blue.500"
                emptyColor="gray.200"
                size="xl"
                speed="0.65s"
                thickness="8px"
              />
            )}
            {Posts !== undefined &&
              Posts.map((post) => {
                return (
                  <GridItem key={uuid()} className="featuredArticlee">
                    <FeaturedArticle Post={post} />
                  </GridItem>
                );
              })}
          </Grid>
        </Flex>
      </Box>
    </section>
  );
}

export default FeaturedSection;
