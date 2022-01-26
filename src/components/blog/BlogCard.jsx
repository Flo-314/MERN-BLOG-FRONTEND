import {Box, Link, Image, Text, Button, Flex, Grid} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

function BlogPost({Post}) {
  return (
    <Grid
      className="LatestArticle"
      direction={"column"}
      flex={"1 auto"}
      height={"100%"}
      templateColumns={"1fr"}
      templateRows={{xl: "1fr 1fr", lg: "2fr 1fr"}}
      width={"100%"}
    >
      <Box className="TopArticle" height={"100%"} width={"100%"}>
        <Image
          alt="Blog image"
          borderRadius={15}
          className="ArticleImage"
          height="100%"
          src={Post.image.src}
          width="100%"
        />
      </Box>

      <Flex
        bg="white"
        className="bottomArticle"
        direction={"column"}
        height={"100%"}
        padding={"5"}
        width={"100%"}
      >
        <Box height={"100%"}>
          <Link as={RouteLink} to={"/posts/category/" + Post.category}>
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
          </Link>
          <Text className="ArticleTitle" fontSize={30} fontWeight={"bold"} marginBottom={5}>
            <Link as={RouteLink} to={"/posts/" + Post.title}>
              {Post.title}
            </Link>
          </Text>
        </Box>
        <Box justifySelf={"flex-end"}>
          <Flex align="center" gap={5} marginBottom="5" marginTop="5">
            <Image
              alt="Writer of post Image"
              borderRadius={"full"}
              className="ArticleImage"
              maxHeight={"75px"}
              maxWidth={"75px"}
              src={Post.user.image.src}
            />
            <Text className="ArticleAuthor">
              By{" "}
              <Link as={RouteLink} fontWeight={900} to={"/writers/" + Post.user._id}>
                {Post.user.username}
              </Link>
            </Text>
            <Text className="ArticleDate" color={"text.grayer"} fontSize="10">
              {Post.timestamp}
            </Text>
          </Flex>

          <Text className="ArticleComments" marginBottom={5}>
            <Link as={RouteLink} fontWeight={600} to={"/posts/" + Post.title}>
              {Post.comments /* length */} comments
            </Link>
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
}

export default BlogPost;
