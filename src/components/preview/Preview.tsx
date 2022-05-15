import { Flex } from "@chakra-ui/react";
import { MethodLayout } from "../layout";
import CheckButton from "./CheckButton";
import PreviewButton from "./PreviewButton";
import PreviewForm from "./PreviewForm";

function Preview() {
  return (
    <MethodLayout>
      <PreviewForm />
      <Flex gap="2rem">
        <CheckButton />
        <PreviewButton />
      </Flex>
    </MethodLayout>
  );
}

export default Preview;
