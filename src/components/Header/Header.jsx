import {Box, Heading} from "@chakra-ui/react";

import Nav from "./Nav";
import Media from "./Media";
function Header() {
  return (
    <header>
      <Box>
        <Heading>FlóBlog</Heading>
      </Box>
      <Nav />
      <Media />
    </header>
  );
}

export default Header;
