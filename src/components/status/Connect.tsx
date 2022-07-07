import { Box, Button, useToast } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { asisConnectState, asisDb, asisPreviewState } from "../../atoms";
import { handleAsisConenct } from "../../utils";

function Connect({ type }: { type: string }) {
  const asis = useRecoilValue(asisDb);
  const setConnect = useSetRecoilState(asisConnectState);
  const setPreview = useSetRecoilState(asisPreviewState);
  const toast = useToast();

  const handleConnect = async () => {
    try {
      const data = await handleAsisConenct(asis);
      const { ConnectionSuccess, SCHEMA_LIST } = data;

      /* *
       * fetching success / failure
       */

      if (ConnectionSuccess) {
        setConnect(true);
        setPreview(SCHEMA_LIST);

        toast({
          title: "연결 성공",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        });
      } else {
        toast({
          title: "연결 실패",
          description: "DB 정보를 확인해주세요.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    } catch (err) {
      console.error("Connect Error!", err);
    }
  };

  return (
    <Box mt="2" w="20rem">
      <Button
        w="100%"
        variant="outline"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        size="sm"
        isDisabled={type === "TOBE" ? true : false}
        bg={type === "TOBE" ? "gray.300" : "none"}
        onClick={handleConnect}
      >
        연결하기
      </Button>
    </Box>
  );
}

export default Connect;
