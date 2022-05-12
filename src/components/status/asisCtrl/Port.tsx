import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { asisPortState } from "../../../atoms";

function Port() {
  const setAsisPortState = useSetRecoilState(asisPortState);

  const handlePort = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setAsisPortState(value);
    },
    [setAsisPortState]
  );

  return (
    <FormControl isRequired>
      <Flex alignItems="center">
        <FormLabel htmlFor="portA" w="8rem" m="0" fontSize="sm">
          PORT
        </FormLabel>
        <Input
          id="portA"
          type="text"
          w="12rem"
          size="sm"
          onChange={handlePort}
        />
      </Flex>
    </FormControl>
  );
}

export default Port;
