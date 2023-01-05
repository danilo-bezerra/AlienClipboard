import {
  Alert as CAlert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = AlertProps & {
  title?: string;
  description: string;
};

export function Alert({ title, description, ...props }: Props) {
  return (
    <CAlert {...props}>
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </CAlert>
  );
}
