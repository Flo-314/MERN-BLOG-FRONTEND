import {useEffect, useState} from "react";

import fetchPosts from "../../../helperModules/fetchPosts";

import FeaturedSection from "./FeaturedArticlesSection";
import PresentationSection from "./PresentationSection";
import LatestsArticles from "./LatestArticlesSection";
function Home() {
  const [Posts, SetPosts] = useState();
  const getPosts = async () => {
    const posts = await fetchPosts();

    SetPosts(posts.posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main>
      <PresentationSection />
      <FeaturedSection Posts={Posts} />
      <LatestsArticles Posts={Posts} />
    </main>
  );
}

export default Home;
