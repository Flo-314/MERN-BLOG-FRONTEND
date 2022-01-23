import {Flex, Heading, Image, Link} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

function WriterCard({Writer}) {
  return (
    <Flex className="boxShadow" direction={"column"}>
      <Image
        alt="WriterPhoto"
        borderRadius={20}
        height="100%"
        minH={"200px"}
        src="https://pbs.twimg.com/media/FJlInE-XoAgJzUH?format=jpg&name=4096x4096"
        width="100%"
      />
      <Flex>
        <Heading border="2px" borderColor="secondary.strong" borderRadius={5} padding={5}>
          <Link as={RouteLink} fontSize={60} to={"/writers/" + Writer.username}>
            {Writer.username}
          </Link>
        </Heading>
      </Flex>
    </Flex>
  );
}

export default WriterCard;
