import {Box} from "@chakra-ui/react";

import FeaturedSection from "./FeaturedArticlesSection";
import PresentationSection from "./PresentationSection";
function Home() {
  return (
    <main>
      <Box bg={"primary.light"}>
        <Box margin={"0 auto"} maxW={"1500px"}>
          <PresentationSection />
          <FeaturedSection />
        </Box>
      </Box>
    </main>
  );
}

export default Home;
