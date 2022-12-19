import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  //   Link,
  Stack,
  Image,
  Text,
  Center,
  useColorModeValue,
  Divider,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [phone, setPhone] = useState("");
  localStorage.setItem("userMobile", phone);
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"https://media.sugarcosmetics.com/upload/authSIe2.jpg"}
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Text fontSize="6xl">Hi!</Text>
          <Heading fontSize={"2xl"}>Login/Sign Up Using Phone</Heading>
          <FormControl id="email">
            <FormLabel>Enter Mobile Number</FormLabel>

            <InputGroup
              color={useColorModeValue("gray.800", "gray.200")}
              bg={useColorModeValue("gray.100", "gray.600")}
              rounded={"full"}
            >
              <InputLeftAddon children="+91" />
              <Input
                type="tel"
                placeholder="phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <Center>
            <Text fontSize="sm">
              Registering for this site allows you to access your order status
              and history. Just fill in the above fields, and we'll get a new
              account set up for you in no time. We will only ask you for
              information necessary to make the purchase process faster and
              easier.
            </Text>
          </Center>
          <Stack>
            <Center>
              <Link to="/Otp">
                <Button colorScheme="blue" w={150}>
                  SEND ME OTP
                </Button>
              </Link>
            </Center>
          </Stack>
          <Divider />
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}
          >
            <Checkbox>Get important updates on Whatsapp</Checkbox>
            <Link to="">
              <p color={"white.300"}>Terms and Conditions</p>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
