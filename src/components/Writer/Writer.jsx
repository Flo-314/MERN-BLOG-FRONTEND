import {Box, Grid, Flex, GridItem, Heading} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {v4 as uuid} from "uuid";
import {useParams} from "react-router-dom";

import fetchWriter from "../../../helperModules/fetchWriter";
import BlogPost from "../blog/BlogCard";

function Writer() {
  const [Posts, SetPosts] = useState();
  let id = useParams().id;

  const getWriterPosts = async () => {
    const posts = await fetchWriter(id);

    console.log(posts.posts);
    SetPosts(posts.posts);
  };

  useEffect(() => {
    getWriterPosts();
  }, []);

  return (
    <main>
      <Box bg={"primary.light"} width={"100%"}>
        <Flex
          className=""
          flexWrap={"wrap"}
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
            templateColumns="1fr 1fr 1fr"
          >
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

export default Writer;