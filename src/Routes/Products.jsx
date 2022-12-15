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

const Products = (list) => {
  return (
    <>
      <Card maxW="sm" key={list.id} boxShadow="2xl" rounded="lg">
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
            <Heading size="md">{list.productName}</Heading>
            <Text>{list.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ₹{list.price}
            </Text>
          </Stack>
        </CardBody>
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
              w="100%"
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
