import {Box, Grid, Flex, GridItem, Spinner} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {v4 as uuid} from "uuid";

import fetchWriters from "../../../helperModules/fetchWriters";

import WriterCard from "./WriterCard";

function Writers() {
  const [Writers, SetWriters] = useState();
  const getWriters = async () => {
    const writers = await fetchWriters();

    SetWriters(writers.writers);
  };

  useEffect(() => {
    getWriters();
  }, []);

  return (
    <main>
      <Box bg={"primary.light"} width={"100%"}>
        <Flex
          flexWrap={"wrap"}
          justify={"center"}
          margin={"0 auto"}
          maxW={"1500px"}
          padding={20}
          width={"80%"}
        >
          <Grid
            className="mobileGridRows"
            direction={"column"}
            gap={20}
            maxHeight={"100%"}
            templateColumns="1fr 1fr 1fr"
          >
            {Writers === undefined && (
              <Spinner
                color="blue.500"
                emptyColor="gray.200"
                size="xl"
                speed="0.65s"
                thickness="8px"
              />
            )}
            {Writers !== undefined &&
              Writers.map((writer) => {
                return (
                  <GridItem key={uuid()} height={"100%"} justifySelf={"stretch"} width={"100%"}>
                    <WriterCard Writer={writer} />
                  </GridItem>
                );
              })}
          </Grid>
        </Flex>
      </Box>
    </main>
  );
}

export default Writers;
