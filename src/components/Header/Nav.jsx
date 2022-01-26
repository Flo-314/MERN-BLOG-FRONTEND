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
                  <h3>
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
                  </h3>
                </MenuItem>
              </li>
              <li>
                <MenuItem>
                  <h3>
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
                  </h3>
                </MenuItem>
              </li>
              <li>
                <MenuItem>
                  <h3>
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
                  </h3>
                </MenuItem>
              </li>
              <li>
                <MenuItem>
                  <h3>
                    <Link
                      as={RouteLink}
                      color={"primary.strong"}
                      fontSize={23}
                      fontWeight={"bold"}
                      to={"/writers"}
                    >
                      Our Writers
                    </Link>
                  </h3>
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
            <h3>
              <Link as={RouteLink} to={"/"}>
                Home
              </Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link as={RouteLink} to={"/about"}>
                About
              </Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link as={RouteLink} to={"/posts"}>
                Blog
              </Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link as={RouteLink} to={"/writers"}>
                Our Writers
              </Link>
            </h3>
          </li>
        </Flex>
      </ul>
    </nav>
  );
}

export default Nav;
