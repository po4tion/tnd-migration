import { Box, Button } from "@chakra-ui/react";

function PreviewButton() {
  return (
    <Box mt="2" w="20rem">
      <Button
        w="100%"
        variant="outline"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        isDisabled
        size="sm"
        bg="gray.300"
      >
        데이터 미리보기
      </Button>
    </Box>
  );
}

export default PreviewButton;
