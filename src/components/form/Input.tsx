import { Input as CInput, InputProps } from "@chakra-ui/react";
import React from "react";

type Props = InputProps & {};

export function Input({ ...rest }: Props) {
  return <CInput {...rest} />;
}
