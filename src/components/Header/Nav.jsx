import {Box, Flex, Link} from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import {ChevronDownIcon} from "chakra-ui-ionicons";

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
              <MenuItem>
                <h3>
                  <Link
                    className="primaryStrong"
                    color={"primary.strong"}
                    fontSize={23}
                    fontWeight={"bold"}
                    href="/"
                  >
                    Home
                  </Link>
                </h3>
              </MenuItem>
              <MenuItem>
                <h3>
                  <Link
                    className="primaryStrong"
                    color={"primary.strong"}
                    fontSize={23}
                    fontWeight={"bold"}
                    href="/about"
                  >
                    About
                  </Link>
                </h3>
              </MenuItem>
              <MenuItem>
                <h3>
                  <Link
                    className="primaryStrong"
                    color={"primary.strong"}
                    fontSize={23}
                    fontWeight={"bold"}
                    href="/blog"
                  >
                    Blog
                  </Link>
                </h3>
              </MenuItem>
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
              <a className="primaryStrong" href="/">
                Home
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a className="primaryStrong" href="/about">
                About
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a className="primaryStrong" href="/blog">
                Blog
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a className="primaryStrong" href="/writers">
                Our Writers
              </a>
            </h3>
          </li>
        </Flex>
      </ul>
    </nav>
  );
}

export default Nav;
