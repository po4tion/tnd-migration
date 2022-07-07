import { VStack } from "@chakra-ui/react";
import { DbTypeSelect, DbValueInput } from "./asis";

const items = ["ip", "port", "db", "id", "pw"];

function StatusFormAsis() {
  const labels = () => {
    return items.map((item) => <DbValueInput type={item} key={item} />);
  };

  return (
    <VStack w="20rem" mt="2">
      <DbTypeSelect />
      {labels()}
    </VStack>
  );
}

export default StatusFormAsis;
