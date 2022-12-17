import { useState } from "react";
import { Image, Stack, Text, Heading, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../Context/cartContext";
const CartItem = ({ id, image, name, price }) => {
  const { removeItem } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setIncrease = () => {
    setQuantity(quantity + 1);
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
              <Heading fontSize={"md"} fontFamily={"body"}>
                {price * quantity}
              </Heading>
            </Stack>
            <Stack
              width={{
                base: "100%",
                md: "10%",
              }}
              textAlign={"right"}
              color="red"
            >
              <FaTrash
                style={{ cursor: "pointer" }}
                onClick={() => removeItem(id)}
              />
            </Stack>
            <Stack
              width={{
                base: "100%",
                md: "10%",
              }}
            >
              <Text textAlign={"left"}>
                <CartAmountToggle
                  quantity={quantity}
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
