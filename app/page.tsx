'use client';
import Image from "next/image";
import styles from "./page.module.css";
import * as React from 'react'
import probability from './probability'
import expected from './expected'
import confidence from './confidence'

import {ChakraProvider, Heading, Input, VStack, Box, HStack, Text, Grid, GridItem, Switch} from '@chakra-ui/react'
import {useEffect} from "react";


export default function Home() {
  const [pity, setPity] = React.useState(0);
  const [pulls, setPulls] = React.useState(0);
  const [chance, setChance] = React.useState(0);
  const [is5050, setIs5050] = React.useState(false);
  const [prob, setProb] = React.useState(0);
  const [expect, setExpect] = React.useState(0);
  const [conf, setConf] = React.useState(0);

  useEffect(() => {
    setProb(probability(pity, pulls, is5050));
    setExpect(expected(pity, is5050));
    setConf(confidence(pity, chance, is5050));
  }, [pity, pulls, chance, is5050]);
  return (
    <ChakraProvider>

      <Box margin={"2em"}>
        <Heading>
          Wuthering Waves Pity Calculator
        </Heading>
        <Grid gridTemplateColumns={'0.5fr 2fr'} width={"80%"} marginTop={"2.5em"}>
          <GridItem display={"flex"} alignItems={"center"}>
            <Text noOfLines={1}>Current Pity:</Text>
          </GridItem>

          <GridItem display={"flex"} alignItems={"center"}>
            {/*type number only*/}
            <Input onChange={(ev) => setPity(+ev.target.value)} placeholder={"input accumulated pity"}></Input>
          </GridItem>

          <GridItem display={"flex"} alignItems={"center"}>
            <Text noOfLines={1}>Number of pulls:</Text>
          </GridItem>

          <GridItem display={"flex"} alignItems={"center"}>
            <Input onChange={(ev) => setPulls(+ev.target.value)} placeholder={"input number of pulls"}></Input>
          </GridItem>

          <GridItem display={"flex"} alignItems={"center"}>
            <Text noOfLines={1}>Is there a 50/50?</Text>
          </GridItem>

          <GridItem display={"flex"} alignItems={"center"}>
            <Switch onChange={(ev) => setIs5050(ev.target.checked)}></Switch>
          </GridItem>




          <GridItem display={"flex"} alignItems={"center"}>
            <Text noOfLines={1}>Probability of pulling:</Text>
          </GridItem>

          <GridItem display={"flex"} alignItems={"center"}>
            <Text>{`${(prob * 100).toFixed(2)}%`}</Text>
          </GridItem>

          <GridItem display={"flex"} alignItems={"center"}>
            <Text noOfLines={1}>Expected Pulls:</Text>
          </GridItem>

          <GridItem display={"flex"} alignItems={"center"}>
            <Text>{`${expect.toFixed(1)}`}</Text>
          </GridItem>


        </Grid>

        <Grid gridTemplateColumns={'0.5fr 2fr'} width={"80%"} marginTop={"2.5em"}>
          <GridItem display={"flex"} alignItems={"center"}>
            <Text noOfLines={1}>Amount of pulls for probabiity:</Text>
          </GridItem>

          <GridItem display={"flex"} alignItems={"center"}>
            <Input onChange={(ev) => setChance(+ev.target.value)} placeholder={"input probability to see how many pulls you need (between 0 and 1)"}></Input>
          </GridItem>
          <GridItem display={"flex"} alignItems={"center"}>
            <Text noOfLines={1}>Pulls needed for probability:</Text>
          </GridItem>

          <GridItem display={"flex"} alignItems={"center"}>
            <Text>{conf}</Text>
          </GridItem>
        </Grid>
      </Box>

    </ChakraProvider>

  );
}
