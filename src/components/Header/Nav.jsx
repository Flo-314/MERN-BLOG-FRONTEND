import {Flex} from "@chakra-ui/react";

function Nav() {
  return (
    <nav>
      <ul>
        <Flex fontSize={23} gap={10}>
          <li>
            <h3>
              <a href="/">Home</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/about">About</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/blog">Blog</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/writers">Our Writers</a>
            </h3>
          </li>
        </Flex>
      </ul>
    </nav>
  );
}

export default Nav;
