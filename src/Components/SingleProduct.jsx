import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductContext } from "../Context/productsContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Card,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Badge,
  CardBody,
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";
import { ChevronRightIcon } from "@chakra-ui/icons";
const API = `http://localhost:8000/all_products`;

const SingleProduct = () => {
  const { getSingleProducts, isSingleLoading, singleProduct } =
    useProductContext();
  console.log(isSingleLoading, singleProduct);
  const { id } = useParams();
  const {
    bestSeller,
    brandName,
    description,
    image,
    productName,
    price,
    quantity,
    rating,
    reviews,
  } = singleProduct;
  useEffect(() => {
    getSingleProducts(`${API}?id=${id}`);
  }, []);
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
              <BreadcrumbLink href="#">{productName}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 6, md: 8 }}
        >
          {/* <Box d="flex" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => {
                const roundedRating = Math.round(rating * 2) / 2;
                if (roundedRating - i >= 1) {
                  return (
                    <BsStarFill
                      key={i}
                      style={{ marginLeft: "1" }}
                      color={i < rating ? "teal.500" : "gray.300"}
                    />
                  );
                }
                if (roundedRating - i === 0.5) {
                  return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
                }
                return <BsStar key={i} style={{ marginLeft: "1" }} />;
              })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {reviews} review{reviews > 1 && "s"}
            </Box>
          </Box> */}
          <div p={10}>
            <Box
              bg={useColorModeValue("white", "gray.800")}
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
            >
              <Image
                src={image}
                alt={`Picture of ${image}`}
                roundedTop="lg"
                p="5"
              />

              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  {bestSeller && (
                    <Badge
                      rounded="full"
                      px="2"
                      position="absolute"
                      top={2}
                      left={2}
                      fontSize="0.8em"
                      colorScheme="green"
                    >
                      BESTSELLER
                    </Badge>
                  )}
                </Box>
              </Box>
            </Box>
          </div>
          <Stack
            spacing={{ base: 6, md: 10 }}
            alignItems="left"
            justifyContent="left"
          >
            <Box as={"header"}>
              <Text fontSize="2xl">{productName}</Text>
              <Box>
                <Flex justifyContent="space-between" alignContent="center">
                  <Rating rating={rating} numReviews={rating} />
                </Flex>
              </Box>
              <Text fontWeight={800} fontSize={"xl"}>
                ₹{price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={"lg"}>{description}</Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  {brandName}
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{" "}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>
                <Text fontSize={"lg"}>{description}</Text>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
};
function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

export default SingleProduct;
