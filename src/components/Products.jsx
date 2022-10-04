import { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "./Product";
import axios from "axios";
import React from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = ({ cat, filters, sort, id }) => {
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8787/api/products?category=${cat}`
            :
             "http://localhost:8787/api/products"
        );
        console.log("res", res)
        setProducts(res.data);
      } catch (err) {
        console.err(err);
      }
    };
    getProducts();
  }, [cat]);
  
  useEffect(() => {
    if (sort === "newest") {
      setProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "asc") {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat ? products.map((item, id) => 
        <Product item={item} key={id} />
      ) : products.slice(0,8).map((item, id) => 
        <Product item={item} key={id} />
      )}
    </Container>
  );
};
