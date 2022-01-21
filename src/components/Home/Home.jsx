import {Box} from "@chakra-ui/react";

import FeaturedSection from "./FeaturedArticlesSection";
import PresentationSection from "./PresentationSection";
function Home() {
  return (
    <main>
      <PresentationSection />
      <FeaturedSection />
    </main>
  );
}

export default Home;
