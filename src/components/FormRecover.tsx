import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { recoverForm } from "../models/forms";
import { Button } from "./Button";
import { Input } from "./Input";

type Props = {
  onSubmit: (form: recoverForm) => void;
};

function FormRecover({ onSubmit }: Props) {
  const [accessCode, setAccessCode] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement> | any) {
    e.preventDefault();

    if (!accessCode) {
      return setIsError(true);
    }

    onSubmit({
      access_code: accessCode,
    });
  }

  return (
    <Box as="form" pt={6} onSubmit={handleSubmit}>
      <Input
        id="access_code"
        value={accessCode}
        onChange={({ target }) => setAccessCode(target.value)}
        placeholder="Enter the access code"
        isInvalid={isError}
        mb={2}
      />
      <Button mb={2} type="submit">
        Recover clipboard
      </Button>
    </Box>
  );
}

export default FormRecover;
