import { Box, BoxProps, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { ToggleTheme } from "./ToggleTheme";

type Props = BoxProps & {};

export default function Header({}: Props) {
  return (
    <Box bg="blue.900">
      <HStack
        maxW="1200px"
        mx="auto"
        py={6}
        px={{
          base: 4,
          xl: 0,
        }}
        justifyContent="space-between"
      >
        <Heading color="white">
          Alien
          <Text as="span" color="cyan.500">
            Clipboard
          </Text>
        </Heading>

        <ToggleTheme />
      </HStack>
    </Box>
  );
}
