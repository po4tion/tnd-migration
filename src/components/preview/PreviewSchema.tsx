/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import {
  previewDataState,
  selectSchemaState,
  selectTableState,
} from "../../atoms";

function PreviewSchema({ isConnect, list }: { isConnect: boolean; list: any }) {
  const setSelectSchema = useSetRecoilState(selectSchemaState);
  const setSelectTable = useSetRecoilState(selectTableState);
  const resetPreviewData = useResetRecoilState(previewDataState);

  const handleSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;

      if (!value.length) {
        setSelectSchema(null);
      } else {
        setSelectSchema(value);
      }

      setSelectTable(null);
      resetPreviewData();
    },
    [resetPreviewData, setSelectSchema, setSelectTable]
  );

  const options = useCallback(() => {
    if (list === null) {
      return null;
    }

    return Object.keys(list).map((schema) => (
      <option key={schema} value={schema}>
        {schema}
      </option>
    ));
  }, [list]);

  return (
    <FormControl>
      <Flex alignItems="center">
        <FormLabel htmlFor="schema" w="8rem" m="0" fontSize="sm">
          스키마
        </FormLabel>
        <Select
          id="schema"
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

export default PreviewSchema;
