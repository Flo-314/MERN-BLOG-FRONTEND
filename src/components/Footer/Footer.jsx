import {Box, Button, Flex, Heading, Image, Text} from "@chakra-ui/react";

function Footer() {
  return (
    <footer>
      <Box bg={"secondary.strong"}>
        <Flex direction={"column"} margin={"0 auto"} maxW={"1500px"}>
          <Heading>FlóBlog</Heading>
          <nav>
            <ul>
              <Flex>
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
          <Box>
            <Text>
              Blog create to complement the Rest api that i made.{" "}
              <a href="https://github.com/Flo-314"> My Github</a>
            </Text>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
}

export default Footer;
