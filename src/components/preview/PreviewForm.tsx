import { Flex, Text, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { asisConnectState, asisPreviewState, countState } from "../../atoms";
import PreviewSchema from "./PreviewSchema";
import PreviewTable from "./PreviewTable";

function PreviewForm() {
  const asisConnect = useRecoilValue(asisConnectState);
  const asisPreview = useRecoilValue(asisPreviewState);
  const count = useRecoilValue(countState);

  return (
    <VStack w="20rem" mt="5">
      <PreviewSchema isConnect={asisConnect} list={asisPreview} />
      <PreviewTable isConnect={asisConnect} list={asisPreview} />
      <Flex justify="space-between" width="100%">
        <Text>총 건수</Text>
        <Text>{count} 건</Text>
      </Flex>
    </VStack>
  );
}

export default PreviewForm;
