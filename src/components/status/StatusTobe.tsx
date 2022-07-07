import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";

function StatusTobe() {
  return (
    <VStack w="20rem" mt="2">
      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="dbTypeB" w="8rem" m="0" fontSize="sm">
            DB 종류
          </FormLabel>
          <Select
            id="dbTypeB"
            placeholder="선택"
            w="12rem"
            size="sm"
            isDisabled
          >
            <option value="mssql">MSSQL</option>
            <option value="mysql">MySQL</option>
          </Select>
        </Flex>
      </FormControl>

      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="ipAddressB" w="8rem" m="0" fontSize="sm">
            IP 주소
          </FormLabel>
          <Input id="ipAddressB" type="text" w="12rem" size="sm" />
        </Flex>
      </FormControl>

      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="portB" w="8rem" m="0" fontSize="sm">
            PORT
          </FormLabel>
          <Input id="portB" type="text" w="12rem" size="sm" />
        </Flex>
      </FormControl>

      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="dbB" w="8rem" m="0" fontSize="sm">
            DB
          </FormLabel>
          <Input id="dbB" type="text" w="12rem" size="sm" />
        </Flex>
      </FormControl>

      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="idB" w="8rem" m="0" fontSize="sm">
            ID
          </FormLabel>
          <Input id="idB" type="text" w="12rem" size="sm" />
        </Flex>
      </FormControl>

      <FormControl isRequired>
        <Flex alignItems="center">
          <FormLabel htmlFor="passwordB" w="8rem" m="0 " fontSize="sm">
            PW
          </FormLabel>
          <Input id="passwordB" type="password" w="12rem" size="sm" />
        </Flex>
      </FormControl>
    </VStack>
  );
}

export default StatusTobe;
