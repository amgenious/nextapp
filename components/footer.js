import {Container, Flex, Box, Text, Heading} from "@chakra-ui/react"
const FooterPage = () => {
    return ( 
        <>
        <Container maxW="container.lg" p={5} textAlign={"center"} boxShadow='base'>
            <Flex justifyContent={"space-around"} flexWrap={"wrap-reverse"} margin={5}>
                <Box>
                    <Heading as={'h1'}>PATCO ELECTRICAL</Heading>
                    <Heading as={'h1'}>COMPANY LIMITED</Heading>
                    <Text>We live to serve.</Text>
                </Box>
                <Box>
                    <Heading as={"h3"}>Address</Heading>
                    <Text>P.O Box FNT 813</Text>
                    <Text>Kumasi, Ashanti Region, Ghana</Text>
                </Box>
            </Flex>
            <Text> &copy; 2022 All rights reserved</Text>
        </Container>
        </>
     );
}
 
export default FooterPage;