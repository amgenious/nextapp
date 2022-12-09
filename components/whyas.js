import {
  Container,
  Text,
  Flex,
  Card,
  CardBody,
} from "@chakra-ui/react";

const Experience = () => {
  return (
    <>
      <Container maxW="container.lg" textAlign={"center"} p={5}>
        <Text fontSize={"4xl"} m={10}>
          Why We Should Be Your <br></br>Top Choice
        </Text>
        <Flex flexWrap={"wrap"} justifyContent={'center'}>
          <Card>
            <CardBody>
              <Text p={5}>
                Quick Response Time.
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Text p={5}>
                Licensed Electricians.
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Text p={5}>
                Experience and Accesible.
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Text p={5}>
                Over 15 years experience.
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default Experience;
