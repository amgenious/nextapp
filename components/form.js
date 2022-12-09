import {
  Container,
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button
} from "@chakra-ui/react";
import { TimeIcon, PhoneIcon, EmailIcon } from "@chakra-ui/icons";

const Contact = () => {
  return (
    <>
      <Container maxW="container.lg" p={5} boxShadow='dark-lg'>
        <Flex justifyContent={"space-around"} flexWrap="wrap">
          <Box>
            <Text fontSize={"30px"}>
              <b>Schedule Service</b>
            </Text>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>Phone Number</FormLabel>
              <Input placeholder="Phone Number" />
            </FormControl>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
            </FormControl>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>Date</FormLabel>
              <Input  type={"date"}/>
            </FormControl>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>Time</FormLabel>
              <Input  type={"time"}/>
            </FormControl>
            <Textarea placeholder="Type your problem" marginBottom={2}></Textarea>
            <Button type="submit" colorScheme={"blue"}>Submit</Button>
          </Box>
          <Box textAlign={"center"} marginTop={'auto'} marginBottom={'auto'}>
            <Text fontSize="30px">
              <b>NOTE</b>
            </Text>
            <Text fontSize={"20px"}>
              <b>Working Days:</b> Mondays - Saturday
            </Text>
            <Text fontSize={"20px"}>
              <TimeIcon></TimeIcon> 8am - 5pm
            </Text>
            <Text fontSize={"15px"}>
              <PhoneIcon></PhoneIcon> 0242365073
            </Text>
            <Text fontSize={"15px"}>
              <EmailIcon></EmailIcon> henrytweneboah956@gmail.com
            </Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Contact;
