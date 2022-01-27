import {Box, Grid, Flex, GridItem, Spinner} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {v4 as uuid} from "uuid";

import fetchApi from "../../helperModules/fetchApi";

import WriterCard from "./WriterCard";

function Writers() {
  const [Writers, SetWriters] = useState();

  useEffect(() => {
    const getWriters = async () => {
      const path = "writers";
      const writers = await fetchApi(path);

      SetWriters(writers.writers);
    };

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
          {Writers === undefined && (
            <Spinner
              color="blue.500"
              emptyColor="gray.200"
              size="xl"
              speed="0.65s"
              thickness="8px"
            />
          )}
          <Grid
            className="mobileGridRows"
            direction={"column"}
            gap={20}
            maxHeight={"100%"}
            templateColumns="1fr 1fr 1fr"
          >
            {Writers &&
              Writers.map((Writer) => {
                return (
                  <GridItem key={uuid()} height={"100%"} justifySelf={"stretch"} width={"100%"}>
                    <WriterCard {...Writer} />
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
