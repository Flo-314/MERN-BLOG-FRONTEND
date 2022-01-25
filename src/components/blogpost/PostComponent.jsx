import {Box, Image, Text, Flex, Heading, Link, Button} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

function PostComponent({Post}) {
  function createMarkup() {
    return {__html: Post.content};
  }

  return (
    <Flex alignItems={"center"} direction={"column"} padding={20}>
      <Box>
        <Text fontSize={15}>{Post.timestamp}</Text>
        <Heading fontSize={55} fontWeight={"black"}>
          {Post.title}
        </Heading>
        <Link as={RouteLink} to={"/posts/category/" + Post.category}>
          <Button
            bg={"primary.light"}
            border="2px"
            borderColor="secondary.strong"
            borderRadius={11}
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
          marginBottom="5"
          marginTop="5"
          padding={"2"}
          width="fit-content"
        >
          <Image borderRadius={10} src={Post.image.src} />
          <Box fontSize="18">
            <Text fontWeight={"bold"}>{Post.user.username}</Text>
            <Text fontWeight={"semibold"}>Editor</Text>
          </Box>
        </Flex>
        <Image src={Post.user.image.src} />
        <article>
          <Text dangerouslySetInnerHTML={createMarkup()} fontSize="16" fontWeight={600} />
        </article>
      </Box>
    </Flex>
  );
}

export default PostComponent;
