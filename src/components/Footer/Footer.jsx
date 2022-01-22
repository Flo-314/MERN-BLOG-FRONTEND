import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import {LogoGithubIcon} from "chakra-ui-ionicons";

function Footer() {
  return (
    <footer>
      <Box bg={"secondary.light"}>
        <Flex
          alignItems={"center"}
          color={"white"}
          direction={"column"}
          justify={"center"}
          margin={"0 auto"}
          maxW={"1500px"}
          paddingTop={200}
          width={"80%"}
        >
          <Heading id="footerTitle" margin={"0 auto"}>
            FLÓBLOG
          </Heading>
          <nav>
            <ul>
              <Flex fontSize={23} gap={10} paddingBottom={7} paddingTop={7}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
              </Flex>
            </ul>
          </nav>
          <hr />
          <Box alignSelf={"flex-start"} paddingBottom={10} paddingTop={10}>
            <Text fontWeight={"black"}>Blog create to complement the Rest api that i made. </Text>
            <a href="https://github.com/Flo-314">
              <Text fontSize={25} fontWeight={"bold"}>
                My Github <LogoGithubIcon />
              </Text>
            </a>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
}

export default Footer;
