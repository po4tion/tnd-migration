import {
  Checkbox,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function ColumnForm() {
  return (
    <TableContainer mt={2}>
      <Table size="sm" variant="unstyled">
        <Thead>
          <Tr>
            <Th></Th>
            <Th textAlign="center">컬럼ID</Th>
            <Th textAlign="center">컬럼이름</Th>
            <Th textAlign="center">컬럼속성</Th>
            <Th textAlign="center">NULL</Th>
            <Th textAlign="center">PK</Th>
            <Th textAlign="center">FK</Th>
            <Th textAlign="center">UQ</Th>
          </Tr>
        </Thead>
        {[1, 2, 3, 4, 5].map((v) => (
          <Tbody key={v}>
            <Tr>
              <Td>
                <Checkbox />
              </Td>
              <Td>
                <Input size="xs" />
              </Td>
              <Td>
                <Input size="xs" />
              </Td>
              <Td>
                <Input size="xs" />
              </Td>
              <Td textAlign="center">
                <Checkbox colorScheme="teal" />
              </Td>
              <Td textAlign="center">
                <Checkbox colorScheme="purple" />
              </Td>
              <Td textAlign="center">
                <Checkbox colorScheme="whatsapp" />
              </Td>
              <Td textAlign="center">
                <Checkbox colorScheme="orange" />
              </Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </TableContainer>
  );
}

export default ColumnForm;
