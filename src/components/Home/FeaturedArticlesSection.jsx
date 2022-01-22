import {Box, Flex, Heading, Grid, GridItem} from "@chakra-ui/react";
import {v4 as uuid} from "uuid";

import FeaturedArticle from "./FeaturedArticle";
function FeaturedSection({Posts}) {
  return (
    <section id="FeaturedArticles">
      <Box bg={"white"} marginTop={10} paddingTop="250">
        <Flex direction={"column"} margin={"0 auto"} maxW={"1500px"} width={"80%"}>
          <Heading>Featured Articles </Heading>
          <hr />
          <Grid templateColumns="repeat(3, 1fr)" templateRows="1fr" width={"100%"}>
            {Posts !== undefined &&
              Posts.map((post) => {
                return (
                  <GridItem key={uuid()}>
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
