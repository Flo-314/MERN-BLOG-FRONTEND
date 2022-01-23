import {Flex, Heading, Text, Link, Box} from "@chakra-ui/react";
import {useEffect, useState} from "react";

import fetchPost from "../../../helperModules/fetchPost";

function About() {
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Flex direction={"column"} justify={"center"} minH={"70vh"} padding="20">
      <Heading fontSize={60}>JUST THE FRONT END OF A BLOG USING:</Heading>
      <hr className="strongLine" />

      <Box fontSize={40}>
        <Text>Frontend: REACT,CSS, CHAKRA-UI, REACT-ROUTER</Text>
        <Text>BACKEND REST API: Node.js, Express, Passport, JWT, MONGODB</Text>
        <Text>
          <Link src="https://floblogapi.herokuapp.com/api/">BACKEND</Link>
          <Link>ADMIN FRONTEND TO POST STUFF</Link>
        </Text>

        <Text marginTop={20}>Feel free to give me feedback </Text>
      </Box>
    </Flex>
  );
}

export default About;
