import { Status } from "../status";
import { ColumnInfo } from "../columnInfo";
import { Box } from "@chakra-ui/react";
import { Mapping } from "../mapping";

function Template() {
  return (
    <Box
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      borderRadius="0.5rem"
    >
      <Status type="TOBE" />
      <Mapping />
      <ColumnInfo type="TOBE" />
    </Box>
  );
}

export default Template;
