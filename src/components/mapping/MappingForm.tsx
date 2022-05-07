import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Select,
  VStack,
} from "@chakra-ui/react";

function MappingForm() {
  return (
    <VStack w="20rem" mt="5">
      <FormControl>
        <Flex alignItems="center" gap={1}>
          <Checkbox />
          <FormLabel htmlFor="buildSchema" w="8rem" m="0" fontSize="sm">
            스키마 생성여부
          </FormLabel>
          <Select
            id="buildSchema"
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
        <Flex alignItems="center" gap={1}>
          <Checkbox />
          <FormLabel htmlFor="buildTable" w="8rem" m="0" fontSize="sm">
            테이블 생성여부
          </FormLabel>
          <Select
            id="buildTable"
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
        <Checkbox>truncate 여부</Checkbox>
      </Flex>
    </VStack>
  );
}

export default MappingForm;
