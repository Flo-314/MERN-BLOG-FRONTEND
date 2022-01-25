import {Box, Grid, Flex, GridItem, Spinner} from "@chakra-ui/react";
import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {v4 as uuid} from "uuid";

import fetchCategory from "../../../helperModules/fetchCategory";
import BlogPost from "../blog/BlogCard";

function Category() {
  const [Posts, SetPosts] = useState();
  const category = useParams();
  const getPosts = async () => {
    const posts = await fetchCategory(category.id);

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

export default Category;
