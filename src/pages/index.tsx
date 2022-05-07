import { Box, Button, Container, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <Box>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
