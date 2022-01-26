import {Box, Grid, Flex, GridItem, Spinner} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {v4 as uuid} from "uuid";

import fetchPosts from "../../../helperModules/fetchPosts";

import BlogPost from "./BlogCard";

function Blog() {
  const [Posts, SetPosts] = useState();
  const getPosts = async () => {
    const posts = await fetchPosts();

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
          <Grid
            className="mobileGridRows"
            direction={"column"}
            gap={20}
            maxHeight={"100%"}
            templateColumns="1fr 1fr 1fr"
          >
            {Posts === undefined && (
              <Spinner
                color="blue.500"
                emptyColor="gray.200"
                margin="0 auto"
                position="static"
                size="xl"
                speed="0.65s"
                thickness="8px"
              />
            )}

            {Posts !== undefined &&
              Posts.map((post) => {
                return (
                  <GridItem key={uuid()} height={"100%"} justifySelf={"stretch"} width={"100%"}>
                    <BlogPost Post={post} />
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
