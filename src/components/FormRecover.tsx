import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { recoverForm } from "../models/forms";
import { Button } from "./Button";
import { Input } from "./form/Input";

type Props = {
  onSubmit: (form: recoverForm) => void;
  isLoading: boolean;
};

function FormRecover({ onSubmit, isLoading }: Props) {
  const [accessCode, setAccessCode] = useState("");
  const [isError, setIsError] = useState(false);

  function handleChange(value: string) {
    if (isError) {
      setIsError(false);
    }
    setAccessCode(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement> | any) {
    e.preventDefault();
    setIsError(false);

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
        onChange={({ target }) => handleChange(target.value)}
        placeholder="Enter the access code"
        isInvalid={isError}
        mb={2}
      />
      <Button isLoading={isLoading} mb={2} type="submit">
        Recover clipboard
      </Button>
    </Box>
  );
}

export default FormRecover;
