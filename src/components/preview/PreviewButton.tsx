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
  useDisclosure,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { previewDataState } from "../../atoms/asis/previewState";

function PreviewButton() {
  const previewData = useRecoilValue(previewDataState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(isOpen, onOpen, onClose);
  console.log(previewData);
  return (
    <Box mt="2" w="20rem">
      <Button
        w="100%"
        variant="outline"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        isDisabled={previewData === null ? true : false}
        size="sm"
        bg="gray.300"
        onClick={onOpen}
      >
        데이터 미리보기
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>모달바디</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default PreviewButton;
