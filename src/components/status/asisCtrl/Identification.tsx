import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { asisIdState } from "../../../atoms";

function Identification() {
  const setAsisIdState = useSetRecoilState(asisIdState);

  const handleId = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setAsisIdState(value);
    },
    [setAsisIdState]
  );

  return (
    <FormControl isRequired>
      <Flex alignItems="center">
        <FormLabel htmlFor="idA" w="8rem" m="0" fontSize="sm">
          ID
        </FormLabel>
        <Input id="idA" type="text" w="12rem" size="sm" onChange={handleId} />
      </Flex>
    </FormControl>
  );
}

export default Identification;
