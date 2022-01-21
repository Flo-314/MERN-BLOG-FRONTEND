import {Box} from "@chakra-ui/react";

import FeaturedSection from "./FeaturedArticlesSection";
import PresentationSection from "./PresentationSection";
import LatestsArticles from "./LatestArticlesSection";
function Home() {
  return (
    <main>
      <PresentationSection />
      <FeaturedSection />
      <LatestsArticles />
    </main>
  );
}

export default Home;
