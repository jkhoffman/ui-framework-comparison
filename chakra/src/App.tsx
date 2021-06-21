import React from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Heading,
  VStack,
  Container,
  Text,
  theme,
  useDisclosure,
} from "@chakra-ui/react";

import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { ModalForm } from "./components/ModalForm";

export const App = () => {
  const disclosure = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <main>
        <Box d="flex" alignItems="baseline" justifyContent="space-between">
          <Heading as="h1">Accessibility Comparison</Heading>
          <ColorModeSwitcher />
        </Box>

        <Box borderWidth={1} borderRadius="lg" padding={2}>
          <Button onClick={disclosure.onOpen}>Pop Modal</Button>
        </Box>
        <ModalForm disclosure={disclosure} />

        <Container>
          <VStack spacing={3}>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis consequuntur deserunt natus sint autem! Atque at
              voluptatibus consectetur a ducimus rerum nemo. Vitae tempore
              quibusdam ullam sint iure. Odit, eum?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              maiores quaerat earum, doloremque rem cumque minima! Dignissimos
              architecto modi nam reiciendis nobis corrupti eveniet, maxime eum
              voluptate nemo perferendis magnam.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              alias mollitia inventore tenetur, molestias dolor neque aperiam
              dolorum natus fugit similique ut nobis necessitatibus ipsum magnam
              qui officia sunt. Culpa?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              eum nesciunt? Numquam atque debitis non quibusdam? Soluta ratione
              non nostrum fugiat doloremque sint architecto optio, nam, a
              dolorum placeat facere!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sint
              soluta? Deserunt alias, voluptatum dolorum consectetur id eum
              commodi! Accusantium eum adipisci quos vel alias corrupti quam
              quibusdam nemo vitae?
            </Text>
          </VStack>
        </Container>
      </main>
    </ChakraProvider>
  );
};
