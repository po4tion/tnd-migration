import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { asisIpAddressState } from "../../../atoms";

function IpAddress() {
  const setAsisIpAddressState = useSetRecoilState(asisIpAddressState);

  const handleIpAddress = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setAsisIpAddressState(value);
    },
    [setAsisIpAddressState]
  );

  return (
    <FormControl isRequired>
      <Flex alignItems="center">
        <FormLabel htmlFor="ipAddressA" w="8rem" m="0" fontSize="sm">
          IP 주소
        </FormLabel>
        <Input
          id="ipAddressA"
          type="text"
          w="12rem"
          size="sm"
          onChange={handleIpAddress}
        />
      </Flex>
    </FormControl>
  );
}

export default IpAddress;
