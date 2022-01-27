import {Box, Grid, Flex, GridItem, Heading, Spinner} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {v4 as uuid} from "uuid";
import {useParams} from "react-router-dom";

import fetchApi from "../../helperModules/fetchApi";
import BlogCard from "../blog/BlogCard";

function Writer() {
  const [Posts, SetPosts] = useState();
  let id = useParams().id;

  useEffect(() => {
    const getWriterPosts = async () => {
      const path = "writers";
      const posts = await fetchApi(path, id);

      SetPosts(posts.posts);
    };

    getWriterPosts();
  }, [id]);

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
          {Posts !== undefined && (
            <Box marginBottom={"20"}>
              <Heading fontWeight={900}>{Posts[0].user.username} Posts:</Heading>
              <hr className="strongLine" />
            </Box>
          )}

          <Grid
            className="mobileGridRows"
            direction={"column"}
            gap={20}
            maxHeight={"100%"}
            templateColumns={{xl: "1fr 1fr 1fr", lg: "1fr 1fr"}}
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
            {Posts &&
              Posts.map((Post) => {
                return (
                  <GridItem key={uuid()} height={"100%"} justifySelf={"stretch"} width={"100%"}>
                    <BlogCard {...Post} />
                  </GridItem>
                );
              })}
          </Grid>
        </Flex>
      </Box>
    </main>
  );
}

export default Writer;
