import {
  Box,
  Container,
  Stack,
  Center,
  Grid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Logo from "../Superficial.png";

// import AppStoreBadge from "@/components/AppStoreBadge";
// import PlayStoreBadge from "@/components/PlayStoreBadge";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("black.100", "black.100")}
      color={useColorModeValue("white.100", "white.100")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Center m={5}>
          <img
            src={Logo}
            alt=""
            style={{
              height: "200px",
            }}
          />
        </Center>
        <Divider />
        <Grid templateColumns="repeat(5, 1fr)" gap={10}>
          <Link href={"#"}>Legal</Link>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Careers</Link>
          <Link href={"#"}>Contact Us</Link>
        </Grid>
        <Divider />
        <Center>
          <Stack direction={["column", "row"]} spacing="24px">
            <div>
              <Text fontSize="2xl">Call us at</Text>
            </div>
            <div>
              <Text fontSize="2xl">Support</Text>
            </div>
            <div>
              <Text fontSize="2xl">Careers</Text>
            </div>
            <div>
              <Text fontSize="2xl">Press & Media</Text>
            </div>
            <div>
              <Text fontSize="2xl">Influencer Collab</Text>
            </div>
          </Stack>
        </Center>
        <Divider />
        <Stack>
          <ListHeader>GET THE NEW SUGAR APP TODAY!</ListHeader>
          {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
