import {
  CardBody,
  Image,
  Stack,
  Card,
  Text,
  Heading,
  CardFooter,
  ButtonGroup,
  Divider,
  Button,
  Center,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/cartContext";

const Products = (list) => {
  const { addToCart } = useCartContext();
  return (
    <>
      <Card maxW="sm" key={list.id} boxShadow="2xl" rounded="lg">
        <NavLink to={`/product/${list.id}`}>
          <CardBody>
            <Center>
              <Image
                boxSize="150px"
                src={list.image}
                alt={list.image}
                borderRadius="lg"
              />
            </Center>
            <Stack mt="6" spacing="3">
              <Heading size="md" height={20}>
                {list.productName}
              </Heading>
              <Text height={20}>{list.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                ₹{list.price}
              </Text>
            </Stack>
          </CardBody>
        </NavLink>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="6">
            <Button colorScheme="teal" variant="outline" size="lg" rounded="lg">
              <AddIcon boxSize={6} />
            </Button>
            <Button
              variant="solid"
              colorScheme=""
              bg="black"
              size="lg"
              w="50%"
              onClick={() => {
                addToCart(list.id, list.price, list);
              }}
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Products;
