import { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  Box,
  PackageTier,
} from "@chakra-ui/react";
import CartAmountToggle from "./CartAmountToggle";
const CartItem = ({ id, image, name, price }) => {
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };
  return (
    <>
      <Box py={6} px={5} min={"100vh"}>
        <Stack spacing={4} width={"100%"} direction={"column"}>
          <Stack
            p={5}
            alignItems={"center"}
            justifyContent={{
              base: "flex-start",
              md: "space-around",
            }}
            direction={{
              base: "column",
              md: "row",
            }}
          >
            <Stack
              width={{
                base: "100%",
                md: "40%",
              }}
              textAlign={"center"}
            >
              <Image
                boxSize="100px"
                objectFit="cover"
                src={image}
                alt={image}
              />
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                {name}
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {price}
              </Heading>
            </Stack>
            <Stack
              width={{
                base: "100%",
                md: "60%",
              }}
            >
              <Text textAlign={"center"}>
                <CartAmountToggle
                  amount={amount}
                  setDecrease={setDecrease}
                  setIncrease={setIncrease}
                />
              </Text>
            </Stack>
          </Stack>
          <Divider />

          <Divider />

          <Divider />
        </Stack>
      </Box>
    </>
  );
};

export default CartItem;
