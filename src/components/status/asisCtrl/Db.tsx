import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { asisDbState } from "../../../atoms";

function Db() {
  const setAsisDbState = useSetRecoilState(asisDbState);

  const handleDb = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setAsisDbState(value);
    },
    [setAsisDbState]
  );

  return (
    <FormControl isRequired>
      <Flex alignItems="center">
        <FormLabel htmlFor="dbA" w="8rem" m="0" fontSize="sm">
          DB
        </FormLabel>
        <Input id="dbA" type="text" w="12rem" size="sm" onChange={handleDb} />
      </Flex>
    </FormControl>
  );
}

export default Db;
