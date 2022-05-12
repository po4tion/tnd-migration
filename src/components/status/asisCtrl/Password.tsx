import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { asisPasswordState } from "../../../atoms";

function Password() {
  const setAsisPasswordState = useSetRecoilState(asisPasswordState);

  const handlePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setAsisPasswordState(value);
    },
    [setAsisPasswordState]
  );

  return (
    <FormControl isRequired>
      <Flex alignItems="center">
        <FormLabel htmlFor="passwordA" w="8rem" m="0 " fontSize="sm">
          PW
        </FormLabel>
        <Input
          id="passwordA"
          type="password"
          w="12rem"
          size="sm"
          onChange={handlePassword}
        />
      </Flex>
    </FormControl>
  );
}

export default Password;
