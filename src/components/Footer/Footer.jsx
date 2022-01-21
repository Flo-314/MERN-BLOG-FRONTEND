import {Box, Button, Flex, Heading, Image, Text} from "@chakra-ui/react";

function Footer() {
  return (
    <footer>
      <Flex direction={"column"}>
        <Heading>FlóBlog</Heading>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </nav>
        <Box>
          <Text>Blog create to complement the Rest api that i made.</Text>
          <Text>
            <a href="https://github.com/Flo-314"> My Github</a>
          </Text>
        </Box>
      </Flex>
    </footer>
  );
}

export default Footer;
