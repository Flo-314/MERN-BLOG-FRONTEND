import {Box, Flex, Link} from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import {ChevronDownIcon} from "chakra-ui-ionicons";
import {Link as RouteLink} from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <Box className="hiddenMobile">
          <Menu>
            <MenuButton
              as={Button}
              bg={"secondary.lighty"}
              color={"primary.strong"}
              fontSize={23}
              fontWeight={"bold"}
              rightIcon={<ChevronDownIcon />}
            >
              Pages
            </MenuButton>

            <MenuList bg={"primary.light"}>
              <li>
                <MenuItem>
                  <Link
                    as={RouteLink}
                    className="primaryStrong"
                    color={"primary.strong"}
                    fontSize={23}
                    fontWeight={"bold"}
                    to={"/"}
                  >
                    Home
                  </Link>
                </MenuItem>
              </li>
              <li>
                <MenuItem>
                  <Link
                    as={RouteLink}
                    className="primaryStrong"
                    color={"primary.strong"}
                    fontSize={23}
                    fontWeight={"bold"}
                    to={"/about"}
                  >
                    About
                  </Link>
                </MenuItem>
              </li>
              <li>
                <MenuItem>
                  <Link
                    as={RouteLink}
                    className="primaryStrong"
                    color={"primary.strong"}
                    fontSize={23}
                    fontWeight={"bold"}
                    to={"/posts"}
                  >
                    Blog
                  </Link>
                </MenuItem>
              </li>
              <li>
                <MenuItem>
                  <Link
                    as={RouteLink}
                    color={"primary.strong"}
                    fontSize={23}
                    fontWeight={"bold"}
                    to={"/writers"}
                  >
                    Our Writers
                  </Link>
                </MenuItem>
              </li>
            </MenuList>
          </Menu>
        </Box>
        <Flex
          className="hiddenDesktop"
          color={"primary.strong"}
          fontSize={23}
          fontWeight={"bold"}
          gap={10}
        >
          <li>
            <Link as={RouteLink} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link as={RouteLink} to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link as={RouteLink} to={"/posts"}>
              Blog
            </Link>
          </li>
          <li>
            <Link as={RouteLink} to={"/writers"}>
              Our Writers
            </Link>
          </li>
        </Flex>
      </ul>
    </nav>
  );
}

export default Nav;
