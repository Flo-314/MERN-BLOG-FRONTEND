import {Box, Flex, Heading, Link} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

import Nav from "./Nav";
import Media from "./Media";
function Header() {
  return (
    <header>
      <Box bg="primary.light" padding="2">
        <Flex
          alignItems={"center"}
          className="ColumnMobile"
          justifyContent={"space-between"}
          margin={"0 auto"}
          maxW={"1500px"}
          width="80%"
        >
          <Box>
            <Heading fontWeight={"extrabold"} id="headerTitle">
              <Link as={RouteLink} to={"/"}>
                FLÓBLOG
              </Link>
            </Heading>
          </Box>
          <Nav />
          <Media />
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
