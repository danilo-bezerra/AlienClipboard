import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { sendForm } from "../models/forms";
import { Button } from "./Button";
import { Textarea } from "./form/Textarea";

type Props = {
  onSubmit: (form: sendForm) => void;
  isLoading: boolean;
};

function FormSend({ onSubmit, isLoading }: Props) {
  const [content, setContent] = useState("");
  const [isError, setIsError] = useState(false);

  function handleChange(value: string) {
    if (isError) {
      setIsError(false);
    }
    setContent(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement> | any) {
    e.preventDefault();
    setIsError(false);

    if (!content) {
      return setIsError(true);
    }
    onSubmit({
      content,
    });
  }

  return (
    <Box as="form" onSubmit={handleSubmit} pt={6}>
      <Textarea
        id="content"
        value={content}
        onChange={({ target }) => handleChange(target.value)}
        placeholder="Put here the text that you want to clipboard"
        resize="vertical"
        isInvalid={isError}
        mb={2}
      />
      <Button isLoading={isLoading} type="submit">
        Send to clipboard
      </Button>
    </Box>
  );
}

export default FormSend;
