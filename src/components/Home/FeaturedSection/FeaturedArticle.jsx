import {Box, GridItem, Image, Text, Grid, Button, Link} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

function FeaturedArticle({Post}) {
  return (
    <Grid
      className="featuredArticle"
      direction={"column"}
      height={"100%"}
      maxWidth="375px"
      templateColumns="1fr"
      templateRows="3fr 2fr"
      width="100%"
    >
      <GridItem className="TopFeaturedArticle">
        <Link as={RouteLink} to={"/posts/" + Post.title}>
          <Image
            alt="Article Photo"
            borderRadius={15}
            className="featuredArticleImage"
            height={"100%"}
            maxHeight="375px"
            src={Post.image.src}
            width="100%"
          />
        </Link>
      </GridItem>
      <GridItem bg="white" className="bottomFeaturedArticle">
        <Box padding={7} paddingBottom={0}>
          <Link as={RouteLink} to={"/posts/category/" + Post.category}>
            <Button
              bg={"primary.light"}
              borderRadius={10}
              className="FeaturedArticleCategory"
              color={"secondary.strong"}
              fontWeight={900}
              marginBottom={5}
              maxHeight={"100%"}
              position={"inherit"}
            >
              {Post.category}
            </Button>
          </Link>
          <Text className="featuredArticleTitle" fontSize={20} fontWeight={"bold"} marginBottom={5}>
            <Link as={RouteLink} to={"/posts/" + Post.title}>
              {Post.title}
            </Link>
          </Text>

          <Text
            className="featuredArticleDate"
            color={"text.grayer"}
            fontWeight={600}
            marginBottom={5}
          >
            {Post.timestamp}
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default FeaturedArticle;
