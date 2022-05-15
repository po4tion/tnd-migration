import { Box, Button } from "@chakra-ui/react";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  asisDbState,
  asisDbTypeState,
  asisIdState,
  asisIpAddressState,
  asisPasswordState,
  asisPortState,
  previewDataState,
  previewLoadingState,
  selectSchemaState,
  selectTableState,
} from "../../atoms";
import { handleAsisPreview, handleCheckBtn } from "../../utils";

function CheckButton() {
  const selectSchema = useRecoilValue(selectSchemaState);
  const selectTable = useRecoilValue(selectTableState);

  const asisDbType = useRecoilValue(asisDbTypeState);
  const asisIpAddress = useRecoilValue(asisIpAddressState);
  const asisPort = useRecoilValue(asisPortState);
  const asisDb = useRecoilValue(asisDbState);
  const asisId = useRecoilValue(asisIdState);
  const asisPassword = useRecoilValue(asisPasswordState);
  const setPreviewData = useSetRecoilState(previewDataState);
  const [previewLoading, setPreviewLoading] =
    useRecoilState(previewLoadingState);

  const handleFetchData = useCallback(async () => {
    setPreviewLoading(true);

    const status = {
      asisDbType,
      asisIpAddress,
      asisPort,
      asisDb,
      asisId,
      asisPassword,
      selectSchema,
      selectTable,
    };

    try {
      const fetchData = await handleAsisPreview(status);

      if (fetchData?.length) {
        setPreviewData(fetchData);
        setPreviewLoading(false);
      }
    } catch {
      console.error("connect Error!");
      setPreviewLoading(false);
    }
  }, [
    asisDb,
    asisDbType,
    asisId,
    asisIpAddress,
    asisPassword,
    asisPort,
    selectSchema,
    selectTable,
    setPreviewData,
    setPreviewLoading,
  ]);

  return (
    <Box mt="2" w="9rem">
      <Button
        w="100%"
        variant="outline"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        isDisabled={handleCheckBtn(selectSchema, selectTable)}
        size="sm"
        bg="gray.300"
        onClick={handleFetchData}
        isLoading={previewLoading}
        loadingText="불러오는 중"
      >
        데이터 불러오기
      </Button>
    </Box>
  );
}

export default CheckButton;
