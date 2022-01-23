import {Box, Image, Text, Flex, Heading} from "@chakra-ui/react";

function PostComponent({Post}) {
  console.log(Post);
  function createMarkup() {
    return {__html: Post.content};
  }

  return (
    <Flex alignItems={"center"} direction={"column"} marginBottom={20} marginTop={20}>
      <Box>
        <Text fontSize={15}>{Post.timestamp}</Text>
        <Heading fontSize={55} fontWeight={"black"}>
          {Post.title}
        </Heading>
        <Flex marginBottom="5" marginTop="5">
          <Image borderRadius={10} src={"" /*Post.image.src*/} />
          <Box fontSize="18">
            <Text fontWeight={"bold"}>{Post.user.username}</Text>
            <Text fontWeight={"semibold"}>Editor</Text>
          </Box>
        </Flex>
        <Image />
        <article>
          <Text dangerouslySetInnerHTML={createMarkup()} fontSize="16" fontWeight={600} />
        </article>
      </Box>
    </Flex>
  );
}

export default PostComponent;
