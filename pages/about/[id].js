import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Container, Flex, Box, Heading, Text } from "@chakra-ui/react";

export async function getStaticPaths (){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const staffs = await res.json();
    
    // const paths = staffs.map((staff:any) => ({
    //     return {
    //     params: { id: staff.id.toString() },
    //     }
    //   }))
    const paths = staffs.map((staff) =>{
        return{
            params:{id:staff.id.toString()}
        }
    })

      return{
        paths, fallback: false
      }
} 

export const getStaticProps = async (context) =>{
  const id =context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json(); 

  return {
    props: {staff:data}
  }
}

const Details = ({staff}) => {
    return ( 
        <>
        <Navbar />
        <Container maxW="container.lg">
            
            <Heading>{staff.name}</Heading>
            <Text>{staff.email}</Text>
            <Text>{staff.phone}</Text>
            <Text>{staff.address.city}</Text>
        </Container>
        <Footer />
        </>
     );
}
 
export default Details;