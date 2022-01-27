import {Box, Grid, Flex, GridItem, Spinner} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {v4 as uuid} from "uuid";

import fetchApi from "../../helperModules/fetchApi";

import BlogCard from "./BlogCard";

function Blog() {
  const [Posts, SetPosts] = useState();
  const getPosts = async () => {
    const path = "posts";
    const posts = await fetchApi(path);

    SetPosts(posts.posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main>
      <Box bg={"primary.light"} width={"100%"}>
        <Flex
          flexWrap={"wrap"}
          justify={"center"}
          margin={"0 auto"}
          maxW={"1500px"}
          padding={20}
          width={"80%"}
        >
          {Posts === undefined && (
            <Spinner
              color="blue.500"
              emptyColor="gray.200"
              marginLeft={40}
              position="static"
              size="xl"
              speed="0.65s"
              thickness="8px"
            />
          )}

          <Grid
            className="mobileGridRows"
            direction={"column"}
            gap={20}
            maxHeight={"100%"}
            templateColumns={{xl: "1fr 1fr 1fr", lg: "1fr 1fr"}}
          >
            {Posts &&
              Posts.map((post) => {
                return (
                  <GridItem key={uuid()} height={"100%"} justifySelf={"stretch"} width={"100%"}>
                    <BlogCard {...post} />
                  </GridItem>
                );
              })}
          </Grid>
        </Flex>
      </Box>
    </main>
  );
}

export default Blog;
