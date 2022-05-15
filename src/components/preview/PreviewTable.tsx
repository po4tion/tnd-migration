/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  previewDataState,
  selectSchemaState,
  selectTableState,
} from "../../atoms";

function PreviewTable({ isConnect, list }: { isConnect: boolean; list: any }) {
  const selectSchema = useRecoilValue(selectSchemaState);
  const setSelectTable = useSetRecoilState(selectTableState);
  const resetPreviewData = useResetRecoilState(previewDataState);

  const options = useCallback(() => {
    const tableName = list?.[selectSchema as string];

    if (tableName === undefined) {
      return null;
    }

    return Object.keys(tableName["TABLE_NAME"]).map((key) => (
      <option key={key} value={key}>
        {key}
      </option>
    ));
  }, [list, selectSchema]);

  const handleSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;

      if (!value.length) {
        resetPreviewData();
        setSelectTable(null);
      } else {
        setSelectTable(value);
      }
    },
    [resetPreviewData, setSelectTable]
  );

  return (
    <FormControl>
      <Flex alignItems="center">
        <FormLabel htmlFor="table" w="8rem" m="0" fontSize="sm">
          테이블
        </FormLabel>
        <Select
          id="table"
          placeholder="선택"
          w="12rem"
          isDisabled={isConnect ? false : true}
          size="sm"
          bg="gray.300"
          onChange={handleSelect}
        >
          {options()}
        </Select>
      </Flex>
    </FormControl>
  );
}

export default PreviewTable;
