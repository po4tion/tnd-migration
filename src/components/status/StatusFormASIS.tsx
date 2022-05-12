import { VStack } from "@chakra-ui/react";
import {
  Db,
  DbType,
  Identification,
  IpAddress,
  Password,
  Port,
} from "./asisCtrl";

function StatusFormAsis() {
  return (
    <VStack w="20rem" mt="2">
      <DbType />
      <IpAddress />
      <Port />
      <Db />
      <Identification />
      <Password />
    </VStack>
  );
}

export default StatusFormAsis;
