import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { useRecoilState } from "recoil";
import { asisDb } from "../../atoms";

function DbValueInput({ type, analysis }: { type: string; analysis: string }) {
  const [asis, setAsis] = useRecoilState(asisDb);

  const handleAsis = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setAsis({
        ...asis,
        [type]: value,
      });
    },
    [asis, setAsis, type]
  );

  return (
    <FormControl isRequired>
      <Flex alignItems="center">
        <FormLabel htmlFor={`${type}-${analysis}`} w="8rem" m="0" fontSize="sm">
          {type.toUpperCase()}
        </FormLabel>
        <Input
          id={`${type}-${analysis}`}
          type={type === "pw" ? "password" : "text"}
          w="12rem"
          size="sm"
          onChange={handleAsis}
        />
      </Flex>
    </FormControl>
  );
}

export default DbValueInput;
