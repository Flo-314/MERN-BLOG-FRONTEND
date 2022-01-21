import {Flex} from "@chakra-ui/react";
import {LogoLinkedinIcon} from "chakra-ui-ionicons";
import {LogoTwitterIcon} from "chakra-ui-ionicons";
import {LogoFacebookIcon} from "chakra-ui-ionicons";

function Media() {
  return (
    <nav>
      <ul>
        <Flex gap={5}>
          <li>
            <button>
              <a href="https://www.linkedin.com/in/juli%C3%A1n-mat%C3%ADas-fl%C3%B3-931226222/">
                <LogoLinkedinIcon color="primary.strong" h={8} w={8} />
              </a>
            </button>
          </li>
          <li>
            <button>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=2s&ab_channel=RickAstley">
                <LogoFacebookIcon color="primary.strong" h={8} w={8} />
              </a>
            </button>
          </li>
          <li>
            <button>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=2s&ab_channel=RickAstley">
                <LogoTwitterIcon color="primary.strong" h={8} w={8} />
              </a>
            </button>
          </li>
        </Flex>
      </ul>
    </nav>
  );
}

export default Media;
