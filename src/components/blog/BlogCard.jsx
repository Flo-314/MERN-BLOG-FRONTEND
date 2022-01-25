import {Box, Link, Image, Text, Button, Flex} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

function BlogPost({Post}) {
  return (
    <Flex
      className="LatestArticle"
      direction={"column"}
      flex={"1 auto"}
      height={"100%"}
      width={"100%"}
    >
      <Box className="TopArticle" height={"100%"} width={"100%"}>
        <Image
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
        <Box>
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
        </Box>
        <Box justifySelf={"flex-end"}>
          <Image className="ArticleImage" src={Post.user.image.src} />
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
      </Flex>
    </Flex>
  );
}

export default BlogPost;
