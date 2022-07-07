import { HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AsisMain, TemplateTobe } from "../components";

const Home: NextPage = () => {
  return (
    <HStack spacing={10} mt={2}>
      <AsisMain />
      <TemplateTobe />
    </HStack>
  );
};

export default Home;
