import {Box, Image, Text, Flex, Heading, Link, Button, Container} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

function PostComponent({category, image, content, timestamp, title, user, _id}) {
  function createMarkup() {
    return {__html: content};
  }

  return (
    <Flex direction={"column"} justify="center" width={"100%"}>
      <Flex direction="column">
        <Text fontSize={15}>{timestamp}</Text>
        <Heading fontWeight={"black"}>{title}</Heading>
        <Link as={RouteLink} to={"/posts/category/" + category}>
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
            {category}
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
            src={user.image.src}
          />
          <Box fontSize="18">
            <Link as={RouteLink} to={"/writers/" + user._id}>
              <Text fontWeight={"bold"}>{user.username}</Text>
            </Link>

            <Text fontWeight={"500"}>Editor</Text>
          </Box>
        </Flex>
      </Flex>
      <Image src={image.src} />
      <article>
        <Container>
          <Text dangerouslySetInnerHTML={createMarkup()} fontSize="16" fontWeight={600} />
        </Container>
      </article>
    </Flex>
  );
}

export default PostComponent;
