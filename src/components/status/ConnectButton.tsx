import { Box, Button } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { asisDb } from "../../atoms";

function ConnectButton({ type }: { type: string }) {
  const asis = useRecoilValue(asisDb);

  const handleConnect = () => {
    console.log(asis);
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
