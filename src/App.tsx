import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Header from "./components/Header";
import FormSend from "./components/FormSend";
import FormRecover from "./components/FormRecover";
import { recoverForm, sendForm } from "./models/forms";
import { api } from "./services/api";

function App() {
  const [accessCode, setAccessCode] = useState("");
  const [recoveredText, setRecoveredText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSendToClipboard(form: sendForm) {
    setAccessCode("");
    setRecoveredText("");

    try {
      const res = await api.post("/clipboards", form);
      setAccessCode(res.data.id);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleRecoverFromClipboard(form: recoverForm) {
    console.log({ sendForm: form });

    try {
      const res = await api.get("/clipboards/" + form.access_code);
      setRecoveredText(res.data.content);
    } catch (e: any) {
      const error =
        e?.response?.data?.error || "Something went wrong. Try again";
      setErrorMessage(error);

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  }

  return (
    <Container minW="100%" minH="100%" p={0}>
      <Header />
      <Container
        as="main"
        maxW="1200px"
        mx="auto"
        py={6}
        px={{
          base: 4,
          xl: 0,
        }}
      >
        {errorMessage && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            <AlertTitle>Error: </AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <Heading as="h2" size="lg">
          Send To Clipboard
        </Heading>
        <FormSend onSubmit={handleSendToClipboard} />
        {accessCode && (
          <Box>
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
        )}

        <Heading as="h2" size="lg" mt={6}>
          Recover from clipboard
        </Heading>
        <FormRecover onSubmit={handleRecoverFromClipboard} />

        <Textarea
          resize="none"
          mb={2}
          rows={5}
          value={recoveredText}
          onChange={() => setRecoveredText(recoveredText)}
          placeholder="Your text will appear here"
        />
      </Container>
    </Container>
  );
}

export default App;
