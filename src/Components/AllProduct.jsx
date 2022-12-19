import { useProductContext } from "../Context/productsContext";
import {
  Grid,
  Text,
  Center,
  Stack,
  Radio,
  Card,
  CardBody,
  RadioGroup,
  Divider,
} from "@chakra-ui/react";
import Products from "../Routes/Products";
import { Spinner } from "@chakra-ui/react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const AllProduct = () => {
  const { isLoading, allProduct, productFilter } = useProductContext();
  console.log("all Products", allProduct);
  if (isLoading) {
    return (
      <>
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            m="20"
          />
        </Center>
      </>
    );
  }
  return (
    <>
      <NavBar />
      <Center>
        <div style={{ display: "flex" }}>
          <div style={{ width: "20%" }}>
            <Card m={3} mt={5}>
              <CardBody>
                <Text fontSize="xl" m="4" mt={6}>
                  SORT BY PRICE
                </Text>
                <RadioGroup defaultValue="1" onChange={productFilter}>
                  <Stack>
                    <Radio size="lg" value="1" colorScheme="orange">
                      RELEVANCE
                    </Radio>
                    <Radio size="lg" value="2" colorScheme="orange">
                      LOW TO HIGH
                    </Radio>
                    <Radio size="lg" value="3" colorScheme="orange">
                      HIGH TO LOW
                    </Radio>
                  </Stack>
                </RadioGroup>

                <Text fontSize="xl" m="4" mt={6}>
                  SORT BY CATEGORY
                </Text>
              </CardBody>
            </Card>
          </div>
          <div style={{ width: "80%" }}>
            <h1>
              <Center>
                <Text fontSize="4xl" m={2}>
                  ALL PRODUCTS
                </Text>
              </Center>
            </h1>

            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {allProduct &&
                allProduct.map((list) => {
                  return <Products key={list.id} {...list} />;
                })}
            </Grid>
          </div>
        </div>
      </Center>
      <Footer />
    </>
  );
};

export default AllProduct;
