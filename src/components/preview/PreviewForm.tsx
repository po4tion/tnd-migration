import { Flex, Text, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import {
  asisConnectState,
  asisPreviewState,
  selectSchemaState,
  selectTableState,
} from "../../atoms";
import PreviewSchema from "./PreviewSchema";
import PreviewTable from "./PreviewTable";

function PreviewForm() {
  const asisConnect = useRecoilValue(asisConnectState);
  const asisPreview = useRecoilValue(asisPreviewState);
  const schema = useRecoilValue(selectSchemaState);
  const table = useRecoilValue(selectTableState);

  const count = () => {
    return (
      <Text>
        {schema && table && asisPreview
          ? asisPreview[schema]["TABLE_NAME"][table]
          : 0}{" "}
        건
      </Text>
    );
  };

  return (
    <VStack w="20rem" mt="5">
      <PreviewSchema isConnect={asisConnect} list={asisPreview} />
      <PreviewTable isConnect={asisConnect} list={asisPreview} />
      <Flex justify="space-between" width="100%">
        <Text>총 건수</Text>
        {count()}
      </Flex>
    </VStack>
  );
}

export default PreviewForm;
