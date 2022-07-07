/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  asisColumn,
  asisDb,
  previewList,
  countState,
  selectPreview,
  selectSchema,
  selectTable,
  sliceState,
} from "../../atoms";
import { handleAsisColumn, objectDepth } from "../../utils";

function PreviewTable({ isConnect, list }: { isConnect: boolean; list: any }) {
  const setTable = useSetRecoilState(selectTable);
  const resetPreview = useResetRecoilState(selectPreview);
  const prevList = useRecoilValue(previewList);
  const setCount = useSetRecoilState(countState);
  const schema = useRecoilValue(selectSchema);
  const setColumn = useSetRecoilState(asisColumn);
  const resetSlice = useResetRecoilState(sliceState);
  const asis = useRecoilValue(asisDb);

  const options = useCallback(() => {
    const tableName = list?.[schema as string];

    if (tableName === undefined) {
      return null;
    }

    return Object.keys(tableName["TABLE_NAME"]).map((key) => (
      <option key={key} value={key}>
        {key}
      </option>
    ));
  }, [list, schema]);

  const handleSelect = useCallback(
    async (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;

      resetSlice();

      if (!value.length) {
        setTable(null);
        setCount(0);
      } else {
        setTable(value);
        setCount(prevList[schema as string]["TABLE_NAME"][value]);
      }

      resetPreview();

      try {
        const fetchColumn = await handleAsisColumn({
          ...asis,
          schema,
          table: value,
        });

        if (fetchColumn?.ConnectionSuccess) {
          const result = objectDepth(fetchColumn, value);

          setColumn(result);
        }
      } catch (err) {
        console.error("Preview Error! ", err);
      }
    },
    [
      resetSlice,
      resetPreview,
      setTable,
      setCount,
      prevList,
      schema,
      asis,
      setColumn,
    ]
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
          bg={isConnect ? "whiteAlpha.100" : "gray.300"}
          onChange={handleSelect}
        >
          {options()}
        </Select>
      </Flex>
    </FormControl>
  );
}

export default PreviewTable;
