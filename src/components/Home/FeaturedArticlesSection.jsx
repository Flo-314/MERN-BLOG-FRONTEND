import {Box, Button, Flex, Heading, Image, Text} from "@chakra-ui/react";

function FeaturedSection() {
  return (
    <section id="FeaturedArticles">
      <Flex bg={"white"} paddingTop="150 ">
        <Heading>Featured Articles </Heading>
        <hr />
        <Flex>
          <Flex className="featuredArticle">
            <Box class="TopFeaturedArticle">
              <Image className="featuredArticleImage" />
            </Box>
            <Box class="bottomFeaturedArticle">
              <Text class="featuredArticleTitle" />
              <Text class="featuredArticleDate" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
}

export default FeaturedSection;
