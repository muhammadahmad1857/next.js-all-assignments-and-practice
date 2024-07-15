import { client } from "@/config/contentful";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  Center,
  Image,
  TableCaption,
  Box,
  TableContainer,
  calc,
} from "@chakra-ui/react";
const fetchProducts = async () => {
  try {
    const response = await client.getEntries({ content_type: "products" });
    const products = response.items; // Accessing the array of products from the response
    return products;
  } catch (error) {
    console.log("Error fetching products: ", error);
    return [];
  }
};
export default async function Products() {
  const data = await fetchProducts();
  return (
    <Box bg="rgb(30, 30, 30)" w="100%">
      <Center color="rgb(230,255,250)">
        <Heading mt="20px">List of Products</Heading>
      </Center>
      <Center>
        <TableContainer
          maxH={`494px`}
          maxW="50%"
          bg="teal.50"
          boxShadow="10px 40px 60px rgb(230,255,250)
          "
          mt="50px"
          //   overflowX={"scroll"}
          overflowY={"scroll"}
          borderRadius={"10px"}
        >
          <Table
            variant="striped"
            colorScheme="teal"
            mt="5%"
            w="100%"
            h="200px"
          >
            <TableCaption>
              The Table Show The Products Which Came From Content Management
              System (CMS)
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Stock</Th>
                <Th>Image</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((product: any, index: any) => {
                return (
                  <Tr key={index}>
                    <Td>{product?.fields.title}</Td>
                    <Td>
                      {product.fields.description.content[0].content[0].value.slice(
                        0,
                        50
                      )}
                      ...
                    </Td>
                    <Td>{product?.fields.stock}</Td>
                    <Td>
                      <Image
                        h="70px"
                        w="100px"
                        src={product?.fields?.url.fields.file.url}
                        alt={product?.fields.title}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </Box>
  );
}

const renderDescription = (description: any) => {
  if (typeof description === "object") {
    // If description is an object, convert it to string
    return JSON.stringify(description);
  } else {
    // If description is a string, return it directly
    return description;
  }
};
