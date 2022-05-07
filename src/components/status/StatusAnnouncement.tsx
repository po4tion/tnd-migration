import { Flex, Heading, Text } from "@chakra-ui/react";

function StatusAnnouncement() {
  return (
    <Flex gap="2" mt="5" flexDirection="column">
      <Heading as="h3" size="sm" textAlign="center">
        DB 정보
      </Heading>
      <Text width="17rem" color="gray.500" fontSize="xs" textAlign="center">
        아래 정보를 모두 작성하고 연결해주세요.
      </Text>
    </Flex>
  );
}

export default StatusAnnouncement;
