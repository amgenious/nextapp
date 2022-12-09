import Head from "next/head";
import { Container, Box, Flex } from "@chakra-ui/react";
import FooterPage from "../components/footer";
import Navbar from "../components/navbar";
import Section from "../components/sect";
import Tell from "../components/call";
import Experience from "../components/whyas";
import Contact from "../components/form";

const HomePage = () => {
  return ( 
    <>
    <Head>
        <title>Patco Electrical Company</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Container maxW="container.lg" height={"50vh"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          height={"50vh"}
          backgroundImage="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('./electrical-engineer.jpg')"
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
        >
          <Box fontSize={"50"} fontWeight={"semibold"} color={"whiteAlpha.900"}>
            <h1>
              If it is Electrical<br></br>We can do it
            </h1>
          </Box>
        </Flex>
      </Container>
      <Section />
      <Tell />
      <Experience />
      <Contact />
    <FooterPage />
    </>
   );
}
 
export default HomePage;