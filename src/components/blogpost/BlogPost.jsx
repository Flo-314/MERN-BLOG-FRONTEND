import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {Box} from "@chakra-ui/react";

import fetchPost from "../../../helperModules/fetchPost";

import PostComponent from "./PostComponent";

function BlogPost() {
  const [Post, SetPost] = useState();
  let id = useParams().id;

  const getPost = async () => {
    let post = await fetchPost(id);

    SetPost(post);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <main>
      <Box maxW={"1500px"} width="80%">
        <section id="post">{Post !== undefined && <PostComponent Post={Post} />}</section>
      </Box>
    </main>
  );
}

export default BlogPost;
