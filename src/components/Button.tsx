import { Button as CButton, ButtonProps } from "@chakra-ui/react";
import React from "react";

type Props = ButtonProps & {};

export function Button({ children, ...rest }: Props) {
  return <CButton {...rest}>{children}</CButton>;
}
