import {Flex} from "@chakra-ui/react";

function Media() {
  return (
    <nav>
      <ul>
        <Flex gap={5}>
          <li>
            <button>
              <img alt="Linkedin" src="" />
            </button>
          </li>
          <li>
            <button>
              <img alt="Facebook" src="" />
            </button>
          </li>
          <li>
            <button>
              <img alt="Twitter" src="" />
            </button>
          </li>
        </Flex>
      </ul>
    </nav>
  );
}

export default Media;
