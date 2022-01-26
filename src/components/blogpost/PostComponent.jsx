import {Box, Image, Text, Flex, Heading, Link, Button, Container} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

function PostComponent({Post}) {
  function createMarkup() {
    return {__html: Post.content};
  }

  return (
    <Flex direction={"column"} justify="center" width={"100%"}>
      <Flex direction="column">
        <Text fontSize={15}>{Post.timestamp}</Text>
        <Heading fontWeight={"black"}>{Post.title}</Heading>
        <Link as={RouteLink} to={"/posts/category/" + Post.category}>
          <Button
            bg={"primary.light"}
            border="2px"
            borderColor="secondary.strong"
            borderRadius={11}
            marginTop={5}
            maxH="2em"
            maxW="150px"
            minW="100px"
            position={"inherit"}
          >
            {Post.category}
          </Button>
        </Link>
        <Flex
          bg={"white"}
          border="2px"
          borderColor="secondary.strong"
          borderRadius={11}
          gap={5}
          marginBottom="5"
          marginTop="5"
          padding={"2"}
          width="fit-content"
        >
          <Image
            alt="writer of post image"
            borderRadius={10}
            maxWidth={"75px"}
            src={Post.user.image.src}
          />
          <Box fontSize="18">
            <Link as={RouteLink} to={"/writers/" + Post.user._id}>
              <Text fontWeight={"bold"}>{Post.user.username}</Text>
            </Link>

            <Text fontWeight={"500"}>Editor</Text>
          </Box>
        </Flex>
      </Flex>
      <Image />
      <article>
        <Container>
          <Text dangerouslySetInnerHTML={createMarkup()} fontSize="16" fontWeight={600} />
        </Container>
      </article>
    </Flex>
  );
}

export default PostComponent;
