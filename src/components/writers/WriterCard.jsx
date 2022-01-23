import {Box, Flex, Heading, Image, Link} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

function WriterCard({Writer}) {
  return (
    <Flex className="boxShadow" direction={"column"} flex={"1 auto"} height={"100%"} width={"100%"}>
      <Box height={"100%"} width="100%">
        <Image
          alt="WriterPhoto"
          borderRadius={20}
          height="100%"
          src="https://pbs.twimg.com/media/FJlInE-XoAgJzUH?format=jpg&name=4096x4096"
          width="100%"
        />
      </Box>
      <Flex padding={5} width={"100%"}>
        <Heading>
          <Link as={RouteLink} fontSize={40} to={"/writers/" + Writer.username}>
            {Writer.username}
          </Link>
        </Heading>
      </Flex>
    </Flex>
  );
}

export default WriterCard;
