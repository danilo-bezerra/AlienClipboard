import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon, WarningIcon } from "@chakra-ui/icons";
import React from "react";
import { Button } from "./Button";

type Props = {};

export function ToggleTheme({}: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Call Sage"
        fontSize="20px"
        _hover={{
          backgroundColor: "blue.800",
        }}
        _focus={{
          backgroundColor: "blue.800",
        }}
        color="white"
        icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      />
    </>
  );
}
