import Aboutdis from "../../components/about_component/about_dis";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Container, Box, Text, Heading ,Divider} from "@chakra-ui/react";
import Link from "next/link";

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const staffs = await res.json();
  
    return {
      props: {
        staffs,
      },
    };
  }

const About = ({ staffs}) => {
    return ( 
        <>
        <Navbar />
        <Aboutdis />
        <Container maxW="container.lg">
        <Heading as={"h4"} size="md" textAlign={"start"} marginBottom={2}>
          Here is a list of our competent working staff.
        </Heading>
        <Text>Click on them to view more details.</Text>
        {staffs.map((staff) => (
            <Link href={'/about/' + staff.id} key={staff.id}>
                <Text height={10} cursor={"pointer"}>{staff.name}</Text>
                <Divider />
            </Link>
            
        ))}
      </Container>
        <Footer />
        </>
     );
}
 
export default About;