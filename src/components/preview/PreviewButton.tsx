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
  asisDbState,
  asisDbTypeState,
  asisIdState,
  asisIpAddressState,
  asisPasswordState,
  asisPortState,
  countState,
  previewDataState,
  previewLoadingState,
  selectSchemaState,
  selectTableState,
  sliceState,
} from "../../atoms";
import { handleAsisPreview } from "../../utils";

function PreviewButton() {
  const selectSchema = useRecoilValue(selectSchemaState);
  const selectTable = useRecoilValue(selectTableState);
  const asisDbType = useRecoilValue(asisDbTypeState);
  const asisIpAddress = useRecoilValue(asisIpAddressState);
  const asisPort = useRecoilValue(asisPortState);
  const asisDb = useRecoilValue(asisDbState);
  const asisId = useRecoilValue(asisIdState);
  const asisPassword = useRecoilValue(asisPasswordState);
  const [previewData, setPreviewData] = useRecoilState(previewDataState);
  const [previewLoading, setPreviewLoading] =
    useRecoilState(previewLoadingState);
  const count = useRecoilValue(countState);
  const [sliceValue, setSliceValue] = useRecoilState(sliceState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFetchData = useCallback(async () => {
    setPreviewLoading(true);

    if (!sliceValue) {
      setSliceValue(count);
    }

    const status = {
      asisDbType,
      asisIpAddress,
      asisPort,
      asisDb,
      asisId,
      asisPassword,
      selectSchema,
      selectTable,
    };

    try {
      const fetchData = await handleAsisPreview(status);

      if (fetchData?.length) {
        setPreviewData(fetchData);
        setPreviewLoading(false);
      } else {
        setPreviewLoading(false);
      }
    } catch {
      console.error("connect Error!");
      setPreviewLoading(false);
    }
  }, [
    asisDb,
    asisDbType,
    asisId,
    asisIpAddress,
    asisPassword,
    asisPort,
    count,
    selectSchema,
    selectTable,
    setPreviewData,
    setPreviewLoading,
    setSliceValue,
    sliceValue,
  ]);

  const handleTh = useCallback(() => {
    if (previewData === null || !previewData?.length) {
      return null;
    }

    return Object.keys(previewData[0])?.map((key: string) => (
      <Th key={key}>{key}</Th>
    ));
  }, [previewData]);

  const handleTd = useCallback(() => {
    if (previewData === null) {
      return null;
    }

    return previewData
      ?.slice(0, sliceValue)
      .map((obj: { [x: string]: any }, idx: number) => (
        <Tr key={idx}>
          {Object.keys(obj)?.map((key, idx) => (
            <Td key={key + idx}>{obj[key]}</Td>
          ))}
        </Tr>
      ));
  }, [previewData, sliceValue]);

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
        size={previewData?.length ? "6xl" : "xs"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>{selectTable} 데이터</Center>
          </ModalHeader>
          <ModalCloseButton />
          {previewData?.length ? (
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
            {previewData?.length ? (
              <Button onClick={onClose}>닫기</Button>
            ) : (
              <Button
                onClick={handleFetchData}
                isLoading={previewLoading}
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
