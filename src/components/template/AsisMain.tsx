import { Status } from "../status";
import { Preview } from "../preview";
import { ColumnInfo } from "../columnInfo";
import { Box } from "@chakra-ui/react";

function AsisMain() {
  return (
    <Box
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      borderRadius="0.5rem"
    >
      <Status type="ASIS" />
      <Preview />
      <ColumnInfo type="ASIS" />
    </Box>
  );
}

export default AsisMain;
