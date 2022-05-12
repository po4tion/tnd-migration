import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { asisDbTypeState } from "../../../atoms";

function DbType() {
  const setAsisDbTypeState = useSetRecoilState(asisDbTypeState);

  /* *
   * Select defaultValue type : ""
   */
  const handleDbType = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;

      setAsisDbTypeState(value);
    },
    [setAsisDbTypeState]
  );

  return (
    <FormControl isRequired>
      <Flex alignItems="center">
        <FormLabel htmlFor="dbTypeA" w="8rem" m="0" fontSize="sm">
          DB 종류
        </FormLabel>
        <Select
          id="dbTypeA"
          placeholder="선택"
          w="12rem"
          size="sm"
          onChange={handleDbType}
        >
          <option value="mssql">MSSQL</option>
          <option value="mysql">MySQL</option>
        </Select>
      </Flex>
    </FormControl>
  );
}

export default DbType;
