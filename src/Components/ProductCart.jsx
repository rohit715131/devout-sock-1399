import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  Text,
  Image,
  CardFooter,
  Button,
  Heading,
  Stack,
  Center,
} from "@chakra-ui/react";
import { useCartContext } from "../Context/cartContext";
import CartItem from "./CartItem";
const ProductCart = () => {
  const { cart } = useCartContext();
  console.log("cart", cart);
  return (
    <>
      <Navbar />
      <Card>
        <CardBody>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <Link to="/">
                <BreadcrumbLink>Home</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Cart</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
      {cart.length === 0 ? (
        <Center>
          <Card
            m="20"
            p="10"
            w="60%"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://sugarcosmetics.com/Cart_nofound.svg"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">No item in Cart</Heading>

                <Text py="2">
                  Hey! It's lonely here. Your bag seems to have no company. Why
                  not add some products?
                </Text>
              </CardBody>

              <CardFooter>
                <Link to="/">
                  <Button variant="solid" colorScheme="" bg="black">
                    SHOP NOW
                  </Button>
                </Link>
              </CardFooter>
            </Stack>
          </Card>
        </Center>
      ) : (
        <Card mt="3">
          <CardBody>
            <Text fontSize="2xl">CART SUMMARY</Text>
            <Card>
              <CardBody>
                {cart.map((item) => {
                  return <CartItem key={item.id} {...item} />;
                })}
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      )}

      <Footer />
    </>
  );
};

export default ProductCart;
