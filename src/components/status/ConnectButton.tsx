import { Box, Button, useToast } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  asisConnectState,
  asisDbState,
  asisDbTypeState,
  asisIdState,
  asisIpAddressState,
  asisPasswordState,
  asisPortState,
} from "../../atoms";
import { asisPreviewState } from "../../atoms/asis/previewState";
import { handleAsisConenct } from "../../utils";

function ConnectButton({ type }: { type: string }) {
  const asisDbType = useRecoilValue(asisDbTypeState);
  const asisIpAddress = useRecoilValue(asisIpAddressState);
  const asisPort = useRecoilValue(asisPortState);
  const asisDb = useRecoilValue(asisDbState);
  const asisId = useRecoilValue(asisIdState);
  const asisPassword = useRecoilValue(asisPasswordState);
  const setAsisConnect = useSetRecoilState(asisConnectState);
  const setConnectState = useSetRecoilState(asisPreviewState);
  const toast = useToast();

  const handleConnect = async () => {
    const status = {
      asisDbType,
      asisIpAddress,
      asisPort,
      asisDb,
      asisId,
      asisPassword,
    };

    try {
      const fetchData = await handleAsisConenct(status);
      const { ConnectionSuccess, SCHEMA_LIST } = fetchData;

      /* *
       * fetching success / failure
       */
      if (ConnectionSuccess) {
        setAsisConnect(true);
        setConnectState(SCHEMA_LIST);
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
    } catch {
      console.error("Connect Error!");
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

export default ConnectButton;
