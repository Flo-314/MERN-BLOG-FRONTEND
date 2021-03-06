import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {Box, Spinner, Flex} from "@chakra-ui/react";

import fetchApi from "../../helperModules/fetchApi";

import PostComponent from "./PostComponent";

function BlogPost() {
  const [Post, SetPost] = useState();
  let id = useParams().id;

  useEffect(() => {
    const getPost = async () => {
      const path = "posts";
      let post = await fetchApi(path, id);

      SetPost(post.post);
    };

    getPost();
  }, [id]);

  return (
    <main>
      <Box bg={"primary.light"} width={"100%"}>
        <Flex
          align={"center"}
          className="ColumnMobile"
          justify={"center"}
          margin={"0 auto"}
          maxW={"1500px"}
          padding={20}
          width={"80%"}
        >
          <section id="post">
            {Post === undefined && (
              <Spinner
                color="blue.500"
                emptyColor="gray.200"
                margin="0 auto"
                position="static"
                size="xl"
                speed="0.65s"
                thickness="8px"
              />
            )}

            {Post && <PostComponent {...Post} />}
          </section>
        </Flex>
      </Box>
    </main>
  );
}

export default BlogPost;
