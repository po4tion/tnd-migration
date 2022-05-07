import { Container } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

function MethodLayout({ children }: { children: ReactJSXElement[] }) {
  return (
    <Container maxW="container.md" centerContent mt="3">
      {children}
    </Container>
  );
}

export default MethodLayout;
