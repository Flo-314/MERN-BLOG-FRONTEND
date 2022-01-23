import {Box, Link, Image, Text, Grid, Button, GridItem} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

function BlogPost({Post}) {
  return (
    <Grid
      className="LatestArticle"
      direction={"column"}
      maxHeight={"100%"}
      maxWidth=""
      templateColumns="1fr"
      templateRows="13fr 6fr"
    >
      <GridItem className="TopArticle">
        <Image
          borderRadius={15}
          className="ArticleImage"
          height={"100%"}
          src={"" /* Post.image */ /*.src*/}
          width="100%"
        />
      </GridItem>
      <GridItem bg="white" className="bottomArticle">
        <Box padding={7} paddingBottom={0}>
          <Button
            bg={"primary.light"}
            borderRadius={10}
            className="ArticleCategory"
            color={"secondary.strong"}
            fontWeight={900}
            marginBottom={5}
            maxHeight={"100%"}
            position={"inherit"}
          >
            {Post.category}
          </Button>
          <Text className="ArticleTitle" fontSize={30} fontWeight={"bold"} marginBottom={5}>
            <Link as={RouteLink} to={"/posts/" + Post.title}>
              {Post.title}
            </Link>
          </Text>

          <Box>
            <Image className="ArticleImage" />
            <Text className="ArticleAuthor">
              By
              <Link as={RouteLink} fontWeight={900} to={"/writers/" + Post.user.username}>
                {Post.user.username}
              </Link>
            </Text>

            <Text className="ArticleDate" color={"text.grayer"} marginBottom={5}>
              {Post.timestamp}
            </Text>
            <Text className="ArticleComments" marginBottom={5}>
              <Link as={RouteLink} fontWeight={600} to={"/posts/" + Post.title}>
                {Post.comments /* length */} comments
              </Link>
            </Text>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default BlogPost;
