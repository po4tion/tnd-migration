import {
  Box,
  Checkbox,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { asisColumn } from "../../atoms";
import { asisColumnType } from "../../types/columnType";

function Skeletons() {
  return (
    <>
      {new Array(5).fill(0).map((_, idx) => (
        <Tr key={idx}>
          <Td>
            <Checkbox />
          </Td>
          <Td>
            <Input size="xs" isReadOnly />
          </Td>
          <Td>
            <Input size="xs" isReadOnly />
          </Td>
          <Td>
            <Input size="xs" isReadOnly />
          </Td>
          <Td textAlign="center">
            <Checkbox colorScheme="teal" isDisabled aria-label="체크박스" />
          </Td>
          <Td textAlign="center">
            <Checkbox colorScheme="purple" isDisabled aria-label="체크박스" />
          </Td>
          <Td textAlign="center">
            <Checkbox colorScheme="whatsapp" isDisabled aria-label="체크박스" />
          </Td>
          <Td textAlign="center">
            <Checkbox colorScheme="orange" isDisabled aria-label="체크박스" />
          </Td>
        </Tr>
      ))}
    </>
  );
}

function ColumnTable() {
  const column = useRecoilValue(asisColumn);

  const handleTr = useCallback(() => {
    return column?.map((items: asisColumnType) => {
      const { COLUMN_ID, COLUMN_NAME, COL_TYPE, NULL_YN, PK, FK, UQ } = items;

      return (
        <Tr key={COLUMN_ID}>
          <Td>
            <Checkbox isChecked />
          </Td>
          <Td>
            <Tooltip label={COLUMN_ID}>
              <Input
                isReadOnly
                size="xs"
                placeholder={COLUMN_ID}
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              />
            </Tooltip>
          </Td>
          <Td>
            <Tooltip label={COLUMN_NAME}>
              <Input
                isReadOnly
                size="xs"
                placeholder={COLUMN_NAME}
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              />
            </Tooltip>
          </Td>
          <Td>
            <Tooltip label={COL_TYPE}>
              <Input
                isReadOnly
                size="xs"
                placeholder={COL_TYPE}
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              />
            </Tooltip>
          </Td>
          <Td textAlign="center">
            <Checkbox
              colorScheme="teal"
              isChecked={NULL_YN === "NOT NULL" ? false : true}
              aria-label="NULL 여부"
            />
          </Td>
          <Td textAlign="center">
            <Checkbox
              colorScheme="purple"
              isChecked={PK.length ? true : false}
              aria-label="기본키 여부"
            />
          </Td>
          <Td textAlign="center">
            <Checkbox
              colorScheme="whatsapp"
              isChecked={FK.length ? true : false}
              aria-label="외래키 여부"
            />
          </Td>
          <Td textAlign="center">
            <Checkbox
              colorScheme="orange"
              isChecked={UQ.length ? true : false}
              aria-label="유니크키 여부"
            />
          </Td>
        </Tr>
      );
    });
  }, [column]);

  return (
    <Box overflow="scroll" maxH="840px">
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

          <Tbody>{column ? handleTr() : <Skeletons />}</Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ColumnTable;
