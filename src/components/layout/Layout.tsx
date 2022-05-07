import { Container } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

function Layout({ children }: { children: ReactJSXElement[] }) {
  return (
    <Container maxW="container.xl" centerContent h="100vh">
      {children}
    </Container>
  );
}

export default Layout;
