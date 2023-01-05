import { Box, Button, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { sendForm } from "../models/forms";

type Props = {
  onSubmit: (form: sendForm) => void;
};

function FormSend({ onSubmit }: Props) {
  const [content, setContent] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement> | any) {
    e.preventDefault();

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
        onChange={({ target }) => setContent(target.value)}
        placeholder="Put here the text that you want to clipboard"
        resize="vertical"
        rows={5}
        isInvalid={isError}
        mb={2}
      />
      <Button type="submit">Send to clipboard</Button>
    </Box>
  );
}

export default FormSend;
