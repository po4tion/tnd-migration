/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  asisDbState,
  asisDbTypeState,
  asisIdState,
  asisIpAddressState,
  asisPasswordState,
  asisPortState,
} from "../../atoms";
import {
  previewDataState,
  selectSchemaState,
} from "../../atoms/asis/previewState";
import { handleAsisPreview } from "../../utils";

function PreviewTable({ isConnect, list }: { isConnect: boolean; list: any }) {
  const selectSchema = useRecoilValue(selectSchemaState);
  const asisDbType = useRecoilValue(asisDbTypeState);
  const asisIpAddress = useRecoilValue(asisIpAddressState);
  const asisPort = useRecoilValue(asisPortState);
  const asisDb = useRecoilValue(asisDbState);
  const asisId = useRecoilValue(asisIdState);
  const asisPassword = useRecoilValue(asisPasswordState);
  const setPreviewData = useSetRecoilState(previewDataState);

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

      try {
        const fetchData = await handleAsisPreview(status);

        setPreviewData(fetchData);
      } catch {
        console.error("connect Error!");
      }
    },
    [
      asisDb,
      asisDbType,
      asisId,
      asisIpAddress,
      asisPassword,
      asisPort,
      selectSchema,
      setPreviewData,
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
