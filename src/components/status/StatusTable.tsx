import { VStack } from "@chakra-ui/react";
import DbTypeSelect from "./DbTypeSelect";
import DbValueInput from "./DbValueInput";

const items = ["ip", "port", "db", "id", "pw"];

function StatusTable({ analysis }: { analysis: string }) {
  const labels = () => {
    return items.map((item) => (
      <DbValueInput type={item} key={item} analysis={analysis} />
    ));
  };

  return (
    <VStack w="20rem" mt="2">
      <DbTypeSelect analysis={analysis} />
      {labels()}
    </VStack>
  );
}

export default StatusTable;
