import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  Stack,
  Image,
  Text,
  Center,
  HStack,
  Divider,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React, { useContext } from "react";
// import { AuthContext } from "../Context/productsContext";
import axios from "axios";
import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  // const { isAuth, setIsAuth } = useContext(AuthContext);
  let mobile = localStorage.getItem("userMobile");
  const handleOtp = () => {
    axios
      .get("http://localhost:8000/user_login")
      .then(function (response) {
        let users = response.data;
        for (let i = 0; i < users.length; i++) {
          let u = users[i].phone;
          console.log(u, mobile);
          if (u === mobile) {
            console.log("true");
            navigate("/");
            // setIsAuth(true);
            return false;
          } else {
            console.log("false");
            navigate("/Registration");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
          <Heading fontSize={"lg"}>Enter OTP</Heading>
          <FormControl>
            <Center>
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Center>
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
              <Button colorScheme="blue" w={150} onClick={handleOtp}>
                VALIDATE THIS
              </Button>
            </Center>
          </Stack>
          <Divider />
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}
          >
            <Checkbox>Get important updates on Whatsapp</Checkbox>
            <Link color={"white.300"}>Terms and Conditions</Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
