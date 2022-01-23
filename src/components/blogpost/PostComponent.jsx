import {Box, Image, Text, Flex, Heading} from "@chakra-ui/react";
import ReactHtmlParser from "react-html-parser";

function PostComponent({Post}) {
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
          <Box fontSize="16" fontWeight={600}>
            {ReactHtmlParser(Post.content)}
          </Box>
        </article>
      </Box>
    </Flex>
  );
}

export default PostComponent;
