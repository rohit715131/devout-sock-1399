import { useProductContext } from "../Context/productsContext";
import { Grid, Text, Center } from "@chakra-ui/react";
import Products from "../Routes/Products";
import { Spinner } from "@chakra-ui/react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const AllProduct = () => {
  const { isLoading, bestSeller, allProduct } = useProductContext();
  console.log("all Products", allProduct);
  if (isLoading) {
    return (
      <>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          m="20"
        />
      </>
    );
  }
  return (
    <>
      <NavBar />
      <Center>
        <div w="70%">
          <h1>
            <Text fontSize="4xl" m={4}>
              ALL PRODUCTS
            </Text>
          </h1>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {allProduct &&
              allProduct.map((list) => {
                return <Products key={list.id} {...list} />;
              })}
          </Grid>
        </div>
      </Center>
      <Footer />
    </>
  );
};

export default AllProduct;
