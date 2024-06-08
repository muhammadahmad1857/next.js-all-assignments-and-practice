"use client";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import CartFunction from "../carts/page";
import { Link } from "@chakra-ui/next-js";

const axios = require("axios");

export default function useECommerce() {
  const [allItem, setAllItem] = useState<any>([]);
  const [search, setSearch] = useState();
  const [searchedResult, setSearchedResult] = useState<any>();
  const toast = useToast();

  const fetchProducts = async () => {
    // let products = await fetch("https://fakestoreapi.com/products");
    // products = await products.json();
    // setAllItem(products);

    // console.log(`products`, products);
    let axiospractice = await axios.get("https://fakestoreapi.com/products");
    setAllItem(axiospractice.data);
    console.log(`axiospractice`, axiospractice);
  };
  const [cartItems, setCartItems] = useState();
  const fetchCart = async (id: number) => {
    console.log(id);

    const items = await axios.post("https://fakestoreapi.com/carts", {
      userId: 5,
      date: new Date().toLocaleDateString,
      products: [{ productId: id }],
    });

    setCartItems(items);
    console.log(`id ${id}`);
    toast({
      title: "Product Added To Cart!",
      description: `Click Here To See Your Cart`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  async function searchBarHandler() {
    let SearchedItem: any = await fetch(
      `https://fakestoreapi.com/products/${search}`
    );
    SearchedItem = await SearchedItem.json();
    setSearchedResult(SearchedItem);
    console.log("SearchedItem", SearchedItem);

    setAllItem(SearchedItem);
  }
  const handleChangeInput = (e: any) => {
    setSearch(e.target.value);
    searchBarHandler();
  };
  // carts logical code is started
  const [gettingItems, setGettingItems] = useState<any>();
  const [quantity, setQuantity] = useState(1);
  const getAllItem = async () => {
    let gettingCart = await axios.get("https://fakestoreapi.com/carts");
    setGettingItems(gettingCart);
    console.log(`gettingCart ${gettingCart}`);
  };
  useEffect(() => {
    getAllItem();
  }, []);
  console.log(`gettingItems ${gettingItems}`);

  const incrementFunction = () => {
    setQuantity(quantity + 1);
  };
  const decrementFunction = () => {
    if (quantity < 1) {
      setQuantity(quantity - 1);
    }
  };
  return {
    allItem,
    setAllItem,
    search,
    setSearch,
    searchedResult,
    setSearchedResult,
    searchBarHandler,
    handleChangeInput,
    fetchProducts,
    cartItems,
    setCartItems,
    fetchCart,
    gettingItems,
    setGettingItems,
    quantity,
    setQuantity,
    incrementFunction,
    decrementFunction,
  };
}
