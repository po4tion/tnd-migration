import { HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { TemplateASIS, TemplateTOBE } from "../components";

const Home: NextPage = () => {
  return (
    <HStack spacing={10} mt={2}>
      <TemplateASIS />
      <TemplateTOBE />
    </HStack>
  );
};

export default Home;
