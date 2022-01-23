import {Flex, Heading, Image} from "@chakra-ui/react";

function WriterCard({Writer}) {
  return (
    <Flex>
      <Image />
      <Flex>
        <Heading>{Writer.username}</Heading>
      </Flex>
    </Flex>
  );
}

export default WriterCard;
