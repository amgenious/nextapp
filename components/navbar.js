import {
    Container,
    Flex,
    Box,
    Spacer,
    Link,
    Divider,
    useColorMode,
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return ( 
        <>
        <Container maxW="container.lg" >
        <Flex minWidth={"max-content"} gap="2" alignItems={"center"}>
          <Box bg={"white"} borderRadius={80}>
            <Image
              src="/patco_logo.png"
              width={100}
              height={100}
              alt="compant logo"
            ></Image>
          </Box>
          <Spacer />
          <Box>
            <Link margin={15} href="/">
              <a>Home</a>
            </Link>
            <Link margin={15} href="/about">
              <a>About</a>
            </Link>
            <Link
              cursor={"pointer"}
              onClick={toggleColorMode}>
               {colorMode === 'light'? <MoonIcon /> : <SunIcon /> }
            </Link>
          </Box>
        </Flex>
        <Divider />
      </Container>
        </>
     );
}
 
export default Navbar;