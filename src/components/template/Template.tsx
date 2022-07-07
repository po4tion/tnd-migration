import { Status } from "../status";
import { Preview } from "../preview";
import { Column } from "../column";
import { Mapping } from "../mapping";
import { Box } from "@chakra-ui/react";

function PrevOrMap({ type }: { type: string }) {
  return type === "ASIS" ? <Preview /> : <Mapping />;
}

function Template({ type }: { type: string }) {
  return (
    <Box
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      borderRadius="0.5rem"
    >
      <Status type={type} />
      <PrevOrMap type={type} />
      <Column type={type} />
    </Box>
  );
}

export default Template;
