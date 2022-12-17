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
import { MdOutlineDeleteForever } from "react-icons/fa";
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
            boxShadow="outline"
            rounded="md"
            width={{
              base: "100%",
              md: "100%",
            }}
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
                md: "20%",
              }}
              textAlign={"left"}
            >
              <Image
                boxSize="100px"
                objectFit="cover"
                src={image}
                alt={image}
              />
            </Stack>
            <Stack
              width={{
                base: "100%",
                md: "50%",
              }}
              textAlign={"left"}
            >
              <Text
                color={"black.100"}
                textTransform={"uppercase"}
                fontWeight={400}
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
                md: "10%",
              }}
              textAlign={"left"}
            >
              {/* <MdOutlineDeleteForever /> */}
            </Stack>
            <Stack
              width={{
                base: "100%",
                md: "10%",
              }}
            >
              <Text textAlign={"left"}>
                <CartAmountToggle
                  amount={amount}
                  setDecrease={setDecrease}
                  setIncrease={setIncrease}
                />
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default CartItem;
