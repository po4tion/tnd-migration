import { Center, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Center>
      <Heading as="h1" size="lg">
        {process.env.NEXT_PUBLIC_APP_NAME}
      </Heading>
    </Center>
  );
}

export default Header;
