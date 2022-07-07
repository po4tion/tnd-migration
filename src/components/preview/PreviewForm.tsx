import { Flex, Text, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { asisConnectState, previewList, countState } from "../../atoms";
import PreviewSchema from "./PreviewSchema";
import PreviewTable from "./PreviewTable";

function PreviewForm() {
  const connect = useRecoilValue(asisConnectState);
  const prevList = useRecoilValue(previewList);
  const count = useRecoilValue(countState);

  return (
    <VStack w="20rem" mt="5">
      <PreviewSchema isConnect={connect} list={prevList} />
      <PreviewTable isConnect={connect} list={prevList} />
      <Flex justify="space-between" width="100%">
        <Text>총 건수</Text>
        <Text>{count} 건</Text>
      </Flex>
    </VStack>
  );
}

export default PreviewForm;
