import {Flex, Heading, Box, Text, Image} from "@chakra-ui/react";

function LatestsArticles() {
  return (
    <section id="LatestsArticles">
      <Box bg={"white"} width={"100%"}>
        <Flex margin={"0 auto"} maxW={"1500px"} width={"80%"}>
          <Heading>Latest Articles</Heading>
          <hr />
          <Flex direction={"column"}>
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
          </Flex>
        </Flex>
      </Box>
    </section>
  );
}

export default LatestsArticles;
