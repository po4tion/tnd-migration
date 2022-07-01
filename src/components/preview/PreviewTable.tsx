/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  asisColumnState,
  asisDbState,
  asisDbTypeState,
  asisIdState,
  asisIpAddressState,
  asisPasswordState,
  asisPortState,
  asisPreviewState,
  countState,
  previewDataState,
  selectSchemaState,
  selectTableState,
} from "../../atoms";
import { handleAsisColumn, objectDepth } from "../../utils";

function PreviewTable({ isConnect, list }: { isConnect: boolean; list: any }) {
  const selectSchema = useRecoilValue(selectSchemaState);
  const setSelectTable = useSetRecoilState(selectTableState);
  const resetPreviewData = useResetRecoilState(previewDataState);
  const asisPreview = useRecoilValue(asisPreviewState);
  const setCount = useSetRecoilState(countState);
  const schema = useRecoilValue(selectSchemaState);
  const setAsisColumn = useSetRecoilState(asisColumnState);
  const asisDbType = useRecoilValue(asisDbTypeState);
  const asisIpAddress = useRecoilValue(asisIpAddressState);
  const asisPort = useRecoilValue(asisPortState);
  const asisDb = useRecoilValue(asisDbState);
  const asisId = useRecoilValue(asisIdState);
  const asisPassword = useRecoilValue(asisPasswordState);

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
    async (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      const status = {
        asisDbType,
        asisIpAddress,
        asisPort,
        asisDb,
        asisId,
        asisPassword,
        selectSchema,
        selectTable: value,
      };

      if (!value.length) {
        resetPreviewData();
        setSelectTable(null);
      } else {
        setSelectTable(value);
        setCount(asisPreview[schema as string]["TABLE_NAME"][value]);
      }

      try {
        const fetchColumn = await handleAsisColumn(status);

        if (!fetchColumn?.ConnectionSuccess) {
          const result = objectDepth(fetchColumn, value);

          setAsisColumn(result);
        }
      } catch {}
    },
    [
      asisDbType,
      asisIpAddress,
      asisPort,
      asisDb,
      asisId,
      asisPassword,
      selectSchema,
      resetPreviewData,
      setSelectTable,
      setCount,
      asisPreview,
      schema,
      setAsisColumn,
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
