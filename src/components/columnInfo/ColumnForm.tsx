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
import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { asisColumnState } from "../../atoms";
import { asisColumnType } from "../../types/columnType";

function ColumnForm() {
  const asisColumn = useRecoilValue(asisColumnState);

  const handleTr = useCallback(() => {
    return asisColumn?.map((items: asisColumnType) => {
      const { COLUMN_ID, COLUMN_NAME, COL_TYPE, NULL_YN, PK, FK, UQ } = items;

      return (
        <Tr key={COLUMN_ID}>
          <Td>
            <Checkbox />
          </Td>
          <Td>
            <Input isReadOnly size="xs" placeholder={COLUMN_ID} />
          </Td>
          <Td>
            <Input
              isReadOnly
              size="xs"
              placeholder={COLUMN_NAME}
              overflowX="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            />
          </Td>
          <Td>
            <Input isReadOnly size="xs" placeholder={COL_TYPE} />
          </Td>
          <Td textAlign="center">
            <Checkbox
              colorScheme="teal"
              isChecked={NULL_YN === "NOT NULL" ? false : true}
            />
          </Td>
          <Td textAlign="center">
            <Checkbox
              colorScheme="purple"
              isChecked={PK.length ? true : false}
            />
          </Td>
          <Td textAlign="center">
            <Checkbox
              colorScheme="whatsapp"
              isChecked={FK.length ? true : false}
            />
          </Td>
          <Td textAlign="center">
            <Checkbox
              colorScheme="orange"
              isChecked={UQ.length ? true : false}
            />
          </Td>
        </Tr>
      );
    });
  }, [asisColumn]);

  const skeletons = () => {
    return (
      <>
        <Tr>
          <Td>
            <Checkbox />
          </Td>
          <Td>
            <Input isReadOnly size="xs" />
          </Td>
          <Td>
            <Input
              isReadOnly
              size="xs"
              overflowX="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            />
          </Td>
          <Td>
            <Input isReadOnly size="xs" />
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
        <Tr>
          <Td>
            <Checkbox />
          </Td>
          <Td>
            <Input isReadOnly size="xs" />
          </Td>
          <Td>
            <Input
              isReadOnly
              size="xs"
              overflowX="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            />
          </Td>
          <Td>
            <Input isReadOnly size="xs" />
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
        <Tr>
          <Td>
            <Checkbox />
          </Td>
          <Td>
            <Input isReadOnly size="xs" />
          </Td>
          <Td>
            <Input
              isReadOnly
              size="xs"
              overflowX="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            />
          </Td>
          <Td>
            <Input isReadOnly size="xs" />
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
        <Tr>
          <Td>
            <Checkbox />
          </Td>
          <Td>
            <Input isReadOnly size="xs" />
          </Td>
          <Td>
            <Input
              isReadOnly
              size="xs"
              overflowX="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            />
          </Td>
          <Td>
            <Input isReadOnly size="xs" />
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
        <Tr>
          <Td>
            <Checkbox />
          </Td>
          <Td>
            <Input isReadOnly size="xs" />
          </Td>
          <Td>
            <Input
              isReadOnly
              size="xs"
              overflowX="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            />
          </Td>
          <Td>
            <Input isReadOnly size="xs" />
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
      </>
    );
  };

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

        <Tbody>{asisColumn ? handleTr() : skeletons()}</Tbody>
      </Table>
    </TableContainer>
  );
}

export default ColumnForm;
