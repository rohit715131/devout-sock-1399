import { useProductContext } from "../Context/productsContext";
import { Box, SkeletonText, Skeleton } from "@chakra-ui/react";
import Products from "../Routes/Products";
import { Grid, Text, Center } from "@chakra-ui/react";
const BestSellerProducts = () => {
  const { isLoading, bestSeller, allProduct } = useProductContext();
  console.log("all Products", allProduct);
  if (isLoading) {
    return (
      <>
        <Box padding="6" boxShadow="lg" bg="white">
          <Skeleton height="100px" bg="green.500" color="white"></Skeleton>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      </>
    );
  }
  return (
    <>
      {/* <Card>
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
              <BreadcrumbLink href="#">Prodcuts</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card> */}
      <Center>
        <div w="70%">
          <h1>
            <Text fontSize="4xl" m={4}>
              BEST SELLERS
            </Text>
          </h1>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {bestSeller.map((list) => {
              return <Products key={list.id} {...list} />;
            })}
          </Grid>
        </div>
      </Center>
    </>
  );
};

export default BestSellerProducts;
