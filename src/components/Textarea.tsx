import { Textarea as CTextarea, TextareaProps } from "@chakra-ui/react";
import React from "react";

type Props = TextareaProps & {};

export function Textarea({ ...rest }: Props) {
  return <CTextarea rows={5} {...rest} />;
}
