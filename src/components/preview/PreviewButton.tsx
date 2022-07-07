/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  asisDb,
  countState,
  selectPreview,
  previewLoading,
  selectSchema,
  selectTable,
  sliceState,
} from "../../atoms";
import { handlePreview } from "../../utils";

function PreviewButton() {
  // value
  const schema = useRecoilValue(selectSchema);
  const table = useRecoilValue(selectTable);
  const asis = useRecoilValue(asisDb);
  const [preview, setPreview] = useRecoilState(selectPreview);
  const [loading, setLoading] = useRecoilState(previewLoading);
  const count = useRecoilValue(countState);
  const [sliceValue, setSliceValue] = useRecoilState(sliceState);

  // chakra
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFetchData = useCallback(async () => {
    setLoading(true);

    if (!sliceValue) {
      setSliceValue(count);
    }

    try {
      const fetchData = await handlePreview({
        ...asis,
        schema,
        table,
      });

      if (fetchData?.length) {
        setPreview(fetchData);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch {
      console.error("connect Error!");
      setLoading(false);
    }
  }, [
    asis,
    count,
    schema,
    setPreview,
    setLoading,
    setSliceValue,
    sliceValue,
    table,
  ]);

  const handleTh = useCallback(() => {
    if (preview === null || !preview?.length) {
      return null;
    }

    return Object.keys(preview[0])?.map((key: string) => (
      <Th key={key}>{key}</Th>
    ));
  }, [preview]);

  const handleTd = useCallback(() => {
    if (preview === null) {
      return null;
    }

    return preview
      ?.slice(0, sliceValue)
      .map((obj: { [x: string]: any }, idx: number) => (
        <Tr key={idx}>
          {Object.keys(obj)?.map((key, idx) => (
            <Td key={key + idx}>{obj[key]}</Td>
          ))}
        </Tr>
      ));
  }, [preview, sliceValue]);

  const handleCount = (value: string) => {
    setSliceValue(parseInt(value));
  };

  return (
    <Box mt="2" w="20rem">
      <Button
        w="100%"
        variant="outline"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        size="sm"
        bg="gray.300"
        onClick={onOpen}
        isDisabled={count ? false : true}
      >
        데이터 미리보기
      </Button>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={preview?.length ? "6xl" : "xs"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>{table} 데이터</Center>
          </ModalHeader>
          <ModalCloseButton />
          {preview?.length ? (
            <ModalBody overflow="scroll" maxH="600px">
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>{handleTh()}</Tr>
                  </Thead>
                  <Tbody>{handleTd()}</Tbody>
                </Table>
              </TableContainer>
            </ModalBody>
          ) : (
            <ModalBody>
              <FormControl isRequired>
                <Flex alignItems="center">
                  <FormLabel htmlFor="ipAddressA" w="8rem" m="0" fontSize="sm">
                    건수
                  </FormLabel>
                  <NumberInput
                    defaultValue={count}
                    min={0}
                    max={count}
                    onChange={handleCount}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
              </FormControl>
            </ModalBody>
          )}
          <ModalFooter>
            {preview?.length ? (
              <Button onClick={onClose}>닫기</Button>
            ) : (
              <Button
                onClick={handleFetchData}
                isLoading={loading}
                loadingText="불러오는 중"
              >
                불러오기
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default PreviewButton;
