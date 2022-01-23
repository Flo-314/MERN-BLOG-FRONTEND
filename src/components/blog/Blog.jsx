import {Box, Grid, Flex, GridItem} from "@chakra-ui/react";
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
          className="ColumnMobile"
          flexWrap={"wrap"}
          gap={20}
          margin={"0 auto"}
          maxW={"1500px"}
          paddingTop={10}
          width={"80%"}
        >
          <Grid
            direction={"column"}
            gap={20}
            padding={20}
            templateColumns="1fr 1fr 1fr "
            templateRows="auto"
            width="100%"
          >
            {Posts !== undefined &&
              Posts.map((post) => {
                return (
                  <GridItem key={uuid()} maxHeight="650px">
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
