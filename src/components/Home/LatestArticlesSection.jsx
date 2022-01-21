import {Flex, Heading, Box, Text, Image} from "@chakra-ui/react";

function LatestsArticles() {
  return (
    <section id="LatestsArticles">
      <Box bg={"white"} width={"100%"}>
        <Flex margin={"0 auto"} maxW={"1500px"}>
          <Heading>Latest Articles</Heading>
          <hr />
          <Flex direction={"column"}>
            <Flex className="LatestsArticles" direction={"column"}>
              <Box class="TopLatestsArticle">
                <Image className="LatestsArticleImage" />
              </Box>
              <Box class="bottomLatestsArticle">
                <Text class="LatestsArticleTitle" />
                <Text class="LatestArticleParagraph" />
                <Box class="latestArticleInfo">
                  <Flex>
                    <Image className="ProfileImg" />
                    <Text className="LatestArticleAuthor" />
                  </Flex>
                  <Text class="LatestsArticleDate" />
                  <Text class="latestArticleComments" />
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </section>
  );
}

export default LatestsArticles;
