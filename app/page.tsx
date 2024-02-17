import Image from "next/image";
import styles from "./page.module.css";

import * as React from 'react'


import {ChakraProvider, Heading} from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <Heading>
        Reverse: 1999 Pity Calculator
      </Heading>
    </ChakraProvider>

  );
}
