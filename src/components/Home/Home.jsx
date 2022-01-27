import {useEffect, useState} from "react";

import fetchApi from "../../helperModules/fetchApi";

import FeaturedSection from "./FeaturedSection/FeaturedArticlesSection";
import PresentationSection from "./PresentationSection";
import LatestsArticles from "./LatestSection/LatestArticlesSection";
function Home() {
  const [recentPosts, SetRecentPosts] = useState();
  const [featuredPosts, SetFeaturedPosts] = useState();
  const getPosts = async () => {
    const path = "posts";
    let posts = await fetchApi(path);

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
