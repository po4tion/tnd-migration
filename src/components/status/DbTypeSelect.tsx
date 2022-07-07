import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useRecoilState } from "recoil";
import { asisDb } from "../../atoms";

function DbTypeSelect({ analysis }: { analysis: string }) {
  const [asis, setAsis] = useRecoilState(asisDb);

  /* *
   * Select defaultValue type : ""
   */
  const handleDbType = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;

      setAsis({
        ...asis,
        dbType: value,
      });
    },
    [asis, setAsis]
  );

  return (
    <FormControl isRequired>
      <Flex alignItems="center">
        <FormLabel htmlFor={`dbType-${analysis}`} w="8rem" m="0" fontSize="sm">
          DB 종류
        </FormLabel>
        <Select
          id={`dbType-${analysis}`}
          placeholder="선택"
          w="12rem"
          size="sm"
          onChange={handleDbType}
        >
          <option value="mssql">MSSQL</option>
          <option value="mysql">MySQL</option>
          <option value="postgresql">PostgreSQL</option>
        </Select>
      </Flex>
    </FormControl>
  );
}

export default DbTypeSelect;
