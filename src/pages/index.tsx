import { HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Template } from "../components";

const types = ["ASIS", "TOBE"];

const Home: NextPage = () => {
  const template = () => {
    return types.map((item) => <Template type={item} key={item} />);
  };

  return (
    <HStack spacing={10} mt={2}>
      {template()}
    </HStack>
  );
};

export default Home;
