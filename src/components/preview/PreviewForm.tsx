import {
  Flex,
  FormControl,
  FormLabel,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";

function PreviewForm() {
  return (
    <VStack w="20rem" mt="5">
      <FormControl>
        <Flex alignItems="center">
          <FormLabel htmlFor="schema" w="8rem" m="0" fontSize="sm">
            스키마
          </FormLabel>
          <Select
            id="schema"
            placeholder="선택"
            w="12rem"
            isDisabled
            size="sm"
            bg="gray.300"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
        </Flex>
      </FormControl>

      <FormControl>
        <Flex alignItems="center">
          <FormLabel htmlFor="table" w="8rem" m="0" fontSize="sm">
            테이블
          </FormLabel>
          <Select
            id="table"
            placeholder="선택"
            w="12rem"
            isDisabled
            size="sm"
            bg="gray.300"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
        </Flex>
      </FormControl>

      <Flex justify="space-between" width="100%">
        <Text>총 건수</Text>
        <Text>0 건</Text>
      </Flex>
    </VStack>
  );
}

export default PreviewForm;
