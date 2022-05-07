import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";

function StatusFormASIS() {
  return (
    <VStack w="20rem" mt="2">
      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="dbTypeA" w="8rem" m="0" fontSize="sm">
            DB 종류
          </FormLabel>
          <Select id="dbTypeA" placeholder="선택" w="12rem" size="sm">
            <option value="mssql">MSSQL</option>
            <option value="mysql">MySQL</option>
          </Select>
        </Flex>
      </FormControl>

      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="ipAddressA" w="8rem" m="0" fontSize="sm">
            IP 주소
          </FormLabel>
          <Input id="ipAddressA" type="text" w="12rem" size="sm" />
        </Flex>
      </FormControl>

      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="portA" w="8rem" m="0" fontSize="sm">
            PORT
          </FormLabel>
          <Input id="portA" type="text" w="12rem" size="sm" />
        </Flex>
      </FormControl>

      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="dbA" w="8rem" m="0" fontSize="sm">
            DB
          </FormLabel>
          <Input id="dbA" type="text" w="12rem" size="sm" />
        </Flex>
      </FormControl>

      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="idA" w="8rem" m="0" fontSize="sm">
            ID
          </FormLabel>
          <Input id="idA" type="text" w="12rem" size="sm" />
        </Flex>
      </FormControl>

      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="passwordA" w="8rem" m="0 " fontSize="sm">
            PW
          </FormLabel>
          <Input id="passwordA" type="password" w="12rem" size="sm" />
        </Flex>
      </FormControl>
    </VStack>
  );
}

export default StatusFormASIS;
