import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Header from "./components/Header";
import FormSend from "./components/FormSend";
import FormRecover from "./components/FormRecover";
import { recoverForm, sendForm } from "./models/forms";
import { api } from "./services/api";
import { Textarea } from "./components/Textarea";
import { Alert } from "./components/Alert";
import { AccessCodeBox } from "./components/AccessCodeBox";

function App() {
  const [accessCode, setAccessCode] = useState("");
  const [recoveredText, setRecoveredText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSendToClipboard(form: sendForm) {
    setErrorMessage("");
    setAccessCode("");
    setRecoveredText("");

    try {
      const res = await api.post("/clipboards", form);
      setAccessCode(res.data.id);
    } catch (e: any) {
      const error =
        e?.response?.data?.error || "Something went wrong. Try again";
      setErrorMessage(error);
    }
  }

  async function handleRecoverFromClipboard(form: recoverForm) {
    setErrorMessage("");

    try {
      const res = await api.get("/clipboards/" + form.access_code);
      setRecoveredText(res.data.content);
    } catch (e: any) {
      const error =
        e?.response?.data?.error || "Something went wrong. Try again";
      setErrorMessage(error);
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
          <Alert description={errorMessage} status="error" mb={4} />
        )}

        <Heading as="h2" size="lg">
          Send To Clipboard
        </Heading>
        <FormSend onSubmit={handleSendToClipboard} />
        {accessCode && <AccessCodeBox accessCode={accessCode} />}

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
