import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NavBar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
const Offers = () => {
  return (
    <>
      <NavBar />
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
              <BreadcrumbLink href="#">Offers</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
      <Footer />
    </>
  );
};

export default Offers;
