import {Box, Link, Image, Text, Grid, Button, GridItem} from "@chakra-ui/react";

function LatestArticle({Post}) {
  return (
    <Grid
      className="LatestArticle"
      direction={"column"}
      maxWidth="1250px"
      templateColumns="1fr"
      templateRows="13fr 6fr"
    >
      <GridItem className="TopLatestArticle">
        <Image
          borderRadius={15}
          className="LatestArticleImage"
          maxHeight="655px"
          src="https://media.istockphoto.com/photos/tropical-seascape-picture-id178574094?k=20&m=178574094&s=612x612&w=0&h=-pcNQwbh50didLEWi0kMeesyXlumb_OT6xCZb7X4SmE="
          width="100%"
        />
      </GridItem>
      <GridItem bg="white" className="bottomLatestArticle">
        <Box padding={7} paddingBottom={0}>
          <Button
            bg={"primary.light"}
            borderRadius={10}
            className="LatestArticleCategory"
            color={"secondary.strong"}
            fontWeight={900}
            marginBottom={5}
            maxHeight={"100%"}
            position={"inherit"}
          >
            {/* {Post.category} */} Travel
          </Button>
          <Text className="LatestArticleTitle" fontSize={30} fontWeight={"bold"} marginBottom={5}>
            {/* {Post.title} */}
            <a href="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. pore explicabo, dolorum non
              cupiditate! Libero?
            </a>
          </Text>

          <Box>
            <Image className="LatestArticleImage" />
            <Text className="LatestArticleAuthor">
              By <Link fontWeight={900}>JULIAN EL BLOGUERO </Link>{" "}
            </Text>
            <Text className="LatestArticleDate" color={"text.grayer"} marginBottom={5}>
              {/* {Post.timestamp} */}Aug 24, 2020
            </Text>
            <Text className="LatestArticleComments">
              <Link fontWeight={600}>22 comments </Link>
            </Text>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default LatestArticle;
