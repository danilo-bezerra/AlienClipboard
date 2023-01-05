import { Box, BoxProps, Text } from "@chakra-ui/react";
import React from "react";

type Props = BoxProps & {
  accessCode: string;
};

export function AccessCodeBox({ accessCode, ...rest }: Props) {
  return (
    <Box {...rest}>
      <Text fontSize="lg" py={2}>
        Clipboard Access Code:{" "}
        <Text as="span" color="cyan.500" fontSize="2xl">
          {accessCode}
        </Text>
        <Text as="span" fontSize="sm" ml={2} color="gray.400">
          (valid for 10 minutes)
        </Text>
      </Text>
    </Box>
  );
}
