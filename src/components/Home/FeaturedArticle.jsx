import {Box, Flex, Image, Text} from "@chakra-ui/react";

function FeaturedArticle({Post}) {
  return (
    <Flex className="featuredArticle" width="100%">
      <Box className="TopFeaturedArticle">
        <Image className="featuredArticleImage">{Post.image}</Image>
      </Box>
      <Box className="bottomFeaturedArticle">
        <Box className="FeaturedArticleCategory">{Post.category}</Box>
        <Text className="featuredArticleTitle">{Post.title}</Text>
        <Text className="featuredArticleDate">{Post.timestamp}</Text>
      </Box>
    </Flex>
  );
}

export default FeaturedArticle;
