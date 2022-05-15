/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
import { useRecoilValue } from "recoil";
import { previewDataState, selectTableState } from "../../atoms";

function PreviewButton() {
  const previewData = useRecoilValue(previewDataState);
  const selectTable = useRecoilValue(selectTableState);

  const { isOpen, onOpen, onClose } = useDisclosure();

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

    return previewData?.map((obj: { [x: string]: any }, idx: number) => (
      <Tr key={idx}>
        {Object.keys(obj)?.map((key, idx) => (
          <Td key={key + idx}>{obj[key]}</Td>
        ))}
      </Tr>
    ));
  }, [previewData]);

  return (
    <Box mt="2" w="9rem">
      <Button
        w="100%"
        variant="outline"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        isDisabled={previewData ? false : true}
        size="sm"
        bg="gray.300"
        onClick={onOpen}
      >
        데이터 미리보기
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectTable ? selectTable : "테이블"}</ModalHeader>
          <ModalCloseButton />
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
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default PreviewButton;
