import { Box, Button, useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { asisConnectState, asisDb, previewList } from "../../atoms";
import { handleConenct } from "../../utils";

function Connect({ type }: { type: string }) {
  // value
  const asis = useRecoilValue(asisDb);

  // set
  const setConnect = useSetRecoilState(asisConnectState);
  const setPrevList = useSetRecoilState(previewList);

  // chakra
  const toast = useToast();

  const handleConnect = useCallback(async () => {
    try {
      const data = await handleConenct(asis);
      const {
        ConnectionSuccess,
        SCHEMA_LIST,
      }: { ConnectionSuccess: boolean; SCHEMA_LIST: any } = data;

      /* *
       * fetching success / failure
       */

      if (ConnectionSuccess) {
        setConnect(true);
        setPrevList(SCHEMA_LIST);

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
  }, [asis, setConnect, setPrevList, toast]);

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
