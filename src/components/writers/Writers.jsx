import {Box, Grid, Flex, GridItem} from "@chakra-ui/react";
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
          className="ColumnMobile"
          flexWrap={"wrap"}
          gap={20}
          margin={"0 auto"}
          maxW={"1500px"}
          paddingTop={10}
          width={"80%"}
        >
          <Grid
            direction={"column"}
            gap={20}
            padding={20}
            templateColumns="1fr 1fr 1fr "
            templateRows="auto"
            width="100%"
          >
            {Writers !== undefined &&
              Writers.map((writer) => {
                return (
                  <GridItem key={uuid()} maxHeight="650px">
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
