// components/Navbar1.tsx
import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import CartIcon from "../cartIcon";
import Link from "next/link";

const Navbar1: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isCartHovered, setIsCartHovered] = useState(false);

  const navigate = (href: string) => {
    window.location.href = href;
  };

  return (
    <Box bgGradient="linear(to-r, teal.500, blue.500)" h={"500px"}>
      <Flex justifyContent="space-between" p="4" alignItems="center">
        {/* Logo on the left */}
        <Link href="/" passHref>
          <Box as="a">
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Your Logo
            </Text>
          </Box>
        </Link>
        {/* Navigation items */}
        <Flex align="center" gap="30px">
          <Link href="/" passHref>
            <Box
              as="a"
              onMouseEnter={() => setHoveredLink("/")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => navigate("/")}
              style={{
                color:
                  window.location.pathname === "/" || hoveredLink === "/"
                    ? "red"
                    : "white",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <b>Home</b>
            </Box>
          </Link>

          <Menu>
            <MenuButton
              as="a"
              onMouseEnter={() => setHoveredLink("/no-where")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => navigate("/no-where")}
              style={{
                color:
                  window.location.pathname === "/no-where" ||
                  hoveredLink === "/no-where"
                    ? "red"
                    : "white",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <b>Wooden Design</b> <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <Link href="/islamic-design" passHref>
                <MenuItem onClick={() => navigate("/islamic-design")}>
                  Islamic Design
                </MenuItem>
              </Link>
              <Link href="/table-tops" passHref>
                <MenuItem onClick={() => navigate("/table-tops")}>
                  Table Tops
                </MenuItem>
              </Link>
              <Link href="/wedding-birthdays" passHref>
                <MenuItem onClick={() => navigate("/wedding-birthdays")}>
                  Wedding/BirthDays
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>

          <Link href="/acrylic-mirror-design" passHref>
            <Box
              as="a"
              onMouseEnter={() => setHoveredLink("/acrylic-mirror-design")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => navigate("/acrylic-mirror-design")}
              style={{
                color:
                  window.location.pathname === "/acrylic-mirror-design" ||
                  hoveredLink === "/acrylic-mirror-design"
                    ? "red"
                    : "white",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <b>Arcylic Mirror Design</b>
            </Box>
          </Link>

          <Link href="/value-combos" passHref>
            <Box
              as="a"
              onMouseEnter={() => setHoveredLink("/value-combos")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => navigate("/value-combos")}
              style={{
                color:
                  window.location.pathname === "/value-combos" ||
                  hoveredLink === "/value-combos"
                    ? "red"
                    : "white",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <b>Value Combos</b>
            </Box>
          </Link>

          <Link href="/outdoor-customized" passHref>
            <Box
              as="a"
              onMouseEnter={() => setHoveredLink("/outdoor-customized")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => navigate("/outdoor-customized")}
              style={{
                color:
                  window.location.pathname === "/outdoor-customized" ||
                  hoveredLink === "/outdoor-customized"
                    ? "red"
                    : "white",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <b>Outdoor/Customized</b>
            </Box>
          </Link>

          <Link href="/car-hanging" passHref>
            <Box
              as="a"
              onMouseEnter={() => setHoveredLink("/car-hanging")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => navigate("/car-hanging")}
              style={{
                color:
                  window.location.pathname === "/car-hanging" ||
                  hoveredLink === "/car-hanging"
                    ? "red"
                    : "white",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <b>Car Hanging</b>
            </Box>
          </Link>

          {/* Add other links as needed */}

          {/* Cart icon on the right */}
        </Flex>
        <Box
          as="a"
          onMouseEnter={() => setHoveredLink("/cart")}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => navigate("/cart")}
          style={{
            color:
              window.location.pathname === "/cart" || hoveredLink === "/cart"
                ? "red"
                : "white",
            textDecoration: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          See Cart
        </Box>
      </Flex>
      <Box mt="100px" textAlign={"center"} color={"white"}>
        <Heading fontSize={"50px"}>Razzi Designs</Heading>
        <Text mt="50px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
          mollitia debitis. Tempore, aliquam? Assumenda blanditiis natus
          excepturi obcaecati quod perspiciatis aliquid iusto, voluptatum veniam
          facere libero rem magnam ea ab!
        </Text>
      </Box>
    </Box>
  );
};

export default Navbar1;
