import {Flex, Heading, Box} from "@chakra-ui/react";
import {v4 as uuid} from "uuid";

import LatestArticle from "./LatestArticle";

function LatestsArticles({Posts}) {
  return (
    <section id="LatestsArticles">
      <Box bg={"white"} width={"100%"}>
        <Flex direction={"column"} margin={"0 auto"} maxW={"1500px"} width={"80%"}>
          <Heading>Latest Articles</Heading>
          <hr className="strongLine" />
          <Flex direction={"column"} />
          {Posts !== undefined &&
            Posts.map((post) => {
              return <LatestArticle key={uuid()} Post={post} />;
            })}
        </Flex>
      </Box>
    </section>
  );
}

export default LatestsArticles;
