import { VStack } from "@chakra-ui/react";
import DbTypeSelect from "./DbTypeSelect";
import DbValueInput from "./DbValueInput";

const items = ["ip", "port", "db", "id", "pw"];

function StatusAsis() {
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

export default StatusAsis;
