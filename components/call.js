import {Container, Flex, Box, Button} from "@chakra-ui/react"

const Tell = () => {
    return (  
        <>
            <Container maxW="container.lg">
                <Flex justifyContent={'space-around'} alignItems="center" p={5} bg="yellow.400">
                    <Box>
                        <h3>Looking for a quality and affordable service?</h3>
                    </Box>
                    <Button colorScheme='blue' variant='solid'> Call</Button>
                </Flex>
            </Container>
        </>
    );
}
 
export default Tell;