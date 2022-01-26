import {useEffect, useState} from "react";

import fetchPosts from "../../../helperModules/fetchPosts";

import FeaturedSection from "./FeaturedArticlesSection";
import PresentationSection from "./PresentationSection";
import LatestsArticles from "./LatestArticlesSection";
function Home() {
  const [recentPosts, SetRecentPosts] = useState();
  const [featuredPosts, SetFeaturedPosts] = useState();
  const getPosts = async () => {
    let posts = await fetchPosts();

    posts = posts.posts;
    SetFeaturedPosts(posts.slice(0, 3));

    SetRecentPosts(posts.slice(-4));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main>
      <PresentationSection />
      <FeaturedSection Posts={featuredPosts} />
      <LatestsArticles Posts={recentPosts} />
    </main>
  );
}

export default Home;
