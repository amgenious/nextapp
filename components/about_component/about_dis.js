import {Container, Flex, Box, Text ,Heading} from "@chakra-ui/react"

const Aboutdis = () => {
    return ( 
        <>
        <Container  maxW="container.lg" textAlign={'center'} p={2}>
            <Heading size='2xl' marginBottom={5}>About Patco Electrical Company</Heading>
            <Text> This company was fouder by one man named Mr. Paul Kwame Tweneboah.</Text>
            <Text marginBottom={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis tenetur, quod in corporis deserunt quas ullam possimus consectetur cum, dolorum temporibus voluptatem, similique a cupiditate maxime dolor exercitationem inventore.</Text>

        </Container>
        </>
     );
}
 
export default Aboutdis;