import {Box, GridItem, Image, Text, Grid, Button} from "@chakra-ui/react";

function FeaturedArticle({Post}) {
  return (
    <Grid
      className="featuredArticle"
      direction={"column"}
      maxHeight={"625px"}
      maxWidth="375px"
      templateColumns="1fr"
      templateRows="3fr 2fr"
      width="100%"
    >
      <GridItem className="TopFeaturedArticle">
        <Image
          borderRadius={15}
          className="featuredArticleImage"
          maxHeight="375px"
          src="https://media.istockphoto.com/photos/tropical-seascape-picture-id178574094?k=20&m=178574094&s=612x612&w=0&h=-pcNQwbh50didLEWi0kMeesyXlumb_OT6xCZb7X4SmE="
          width="100%"
        />
      </GridItem>
      <GridItem bg="white" className="bottomFeaturedArticle">
        <Box padding={7} paddingBottom={0}>
          <Button
            bg={"primary.light"}
            borderRadius={10}
            className="FeaturedArticleCategory"
            color={"secondary.strong"}
            fontWeight={500}
            marginBottom={5}
            maxHeight={"100%"}
            position={"inherit"}
          >
            {/* {Post.category} */} Travel
          </Button>
          <Text className="featuredArticleTitle" fontSize={17} fontWeight={"bold"} marginBottom={5}>
            {/* {Post.title} */}
            <a href="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. pore explicabo, dolorum non
              cupiditate! Libero?
            </a>
          </Text>
          <Text className="featuredArticleDate" color={"text.grayer"} marginBottom={5}>
            {/* {Post.timestamp} */}Aug 24, 2020
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default FeaturedArticle;
