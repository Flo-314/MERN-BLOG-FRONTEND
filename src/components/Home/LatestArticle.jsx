import {Box, Flex, Image, Text, Grid, Button} from "@chakra-ui/react";

function LatestArticle({Post}) {
  return (
    <Flex className="LatestsArticles" direction={"column"}>
      <Box className="TopLatestsArticle">
        <Image className="LatestsArticleImage" />
      </Box>
      <Box className="bottomLatestsArticle">
        <Text className="LatestsArticleTitle" />
        <Text className="LatestArticleParagraph" />
        <Box className="latestArticleInfo">
          <Flex>
            <Image className="ProfileImg" />
            <Text className="LatestArticleAuthor" />
          </Flex>
          <Text className="LatestsArticleDate" />
          <Text className="latestArticleComments" />
        </Box>
      </Box>
    </Flex>
  );
}

export default LatestArticle;
