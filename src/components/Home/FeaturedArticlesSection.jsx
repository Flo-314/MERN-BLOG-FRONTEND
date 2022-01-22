import {Box, Button, Flex, Heading, Image, Text} from "@chakra-ui/react";

function FeaturedSection() {
  return (
    <section id="FeaturedArticles">
      <Box bg={"white"} marginTop={10} paddingTop="250">
        <Flex margin={"0 auto"} maxW={"1500px"} width={"80%"}>
          <Heading>Featured Articles </Heading>
          <hr />
          <Flex>
            <Flex className="featuredArticle">
              <Box className="TopFeaturedArticle">
                <Image className="featuredArticleImage" />
              </Box>
              <Box className="bottomFeaturedArticle">
                <Text className="featuredArticleTitle" />
                <Text className="featuredArticleDate" />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </section>
  );
}

export default FeaturedSection;
