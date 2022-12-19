import React from "react";
import { Box, Flex, Text, Button, Stack, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../Superficial.png";
import { useCartContext } from "../Context/cartContext";

const ProjectLogo = () => (
  <button style={{ height: "100%" }}>
    <img
      src={Logo}
      alt=""
      style={{
        height: "50px",
      }}
    />
  </button>
);
const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Link to="/">
        <ProjectLogo />
      </Link>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  const { total_item } = useCartContext();
  console.log(total_item, "total_Item");
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem>
          {" "}
          <Link to="/"> MAKEUP </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Skincare">SKINCARE</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Offers">OFFERS</Link>
        </MenuItem>
        {/* <MenuItem>
          <Link to="/Store">STORE</Link>
        </MenuItem> */}
        <MenuItem isLast>
          <Link to="/Login">
            <Button
              size="sm"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["black", "black", "black.100", "black.100"]}
              _hover={{
                bg: ["white.300", "white.300", "white.300", "white.300"],
              }}
            >
              LOGIN/REGISTER
            </Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Cart">CART</Link>
          <Badge
            rounded="full"
            position="absolute"
            top={3}
            right={2}
            fontSize="0.8em"
            colorScheme="pink"
          >
            {total_item === 0 ? 0 : "1+"}
          </Badge>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={3}
      bg={["black", "black", "black.100", "black.100"]}
      color={["white", "white", "white.100", "white.100"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
