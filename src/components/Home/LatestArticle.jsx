import {Box, Link, Image, Text, Grid, Button, GridItem, Flex} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";
function LatestArticle({Post}) {
  return (
    <Flex
      className="LatestArticle"
      direction={"column"}
      height={"100%"}
      maxWidth={"750px"}
      width={"100%"}
    >
      <Flex className="TopLatestArticle">
        <Image
          alt="Post Image"
          borderRadius={15}
          className="LatestArticleImage"
          height={"100%"}
          maxHeight="655px"
          minHeight={"350px"}
          src={Post.image.src}
          width="100%"
        />
      </Flex>
      <Flex bg="white" className="bottomLatestArticle" direction="column">
        <Box padding={7} paddingBottom={0}>
          <Link as={RouteLink} to={"/posts/category/" + Post.category}>
            <Button
              bg={"primary.light"}
              borderRadius={10}
              className="LatestArticleCategory"
              color={"secondary.strong"}
              fontWeight={900}
              marginBottom={5}
              maxHeight={"100%"}
              position={"inherit"}
            >
              {Post.category}
            </Button>
          </Link>
          <Text className="LatestArticleTitle" fontSize={30} fontWeight={"bold"} marginBottom={5}>
            <Link as={RouteLink} to={"/posts/" + Post.title}>
              {Post.title}
            </Link>
          </Text>

          <Flex align="center" className="ColumnMobile" fontSize={20} gap={5} marginBottom={7}>
            <Image
              alt="Writer of Post Image"
              borderRadius={"full"}
              className="LatestArticleImageAuthor"
              maxH={"100px"}
              maxW={"100px"}
              src={Post.user.image.src}
            />
            <Text className="LatestArticleAuthor">
              By:
              <Link as={RouteLink} fontWeight={900} to={"/writers/" + Post.user._id}>
                {"  "}
                {Post.user.username}
              </Link>
            </Text>

            <Text className="LatestArticleDate" color={"text.grayer"}>
              {Post.timestamp}
            </Text>
            <Text className="LatestArticleComments">
              <Link as={RouteLink} fontWeight={600} to={"/posts/" + Post.title}>
                {Post.comments /* length */} comments
              </Link>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default LatestArticle;
