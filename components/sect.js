import { Container, Flex, Box, Text } from "@chakra-ui/react";

const Section = () => {
  return (
    <>
      <Container maxW="container.lg" height={"50vh"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          height={"50vh"}
          background="radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(1,44,255,1) 50%, rgba(0,212,255,1) 100%)"
        >
          <Box textAlign={"center"}>
            <Text fontSize={"5xl"}>
              <i>"We provide Electrical Installation,</i>
              <br></br>
              <i>Upgrades and Installation"</i>
            </Text>
            <p>
              Patco Agents have extensive experience in both commercial and
              residential fields
            </p>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Section;
