import { Box, Heading } from "@chakra-ui/react";

function StatusHeader({ type }: { type: string }) {
  return (
    <Box>
      <Heading as="h2" size="md">
        {type}
      </Heading>
    </Box>
  );
}

export default StatusHeader;
