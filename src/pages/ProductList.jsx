import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Products } from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { MenuItem, MenuList, Link } from "@mui/material";
import React from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = (id) => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  // const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Categories:</FilterText>
          <MenuList>
            <MenuItem
              component={Link}
              href="http://localhost:3000/products/Doll"
            >
              Doll
            </MenuItem>
            <MenuItem
              component={Link}
              href="http://localhost:3000/products/Altered%20Books"
            >
              Altered Books
            </MenuItem>
            <MenuItem
              component={Link}
              href="http://localhost:3000/products/Water%20Soluble%20and%20Chiffon%20work"
            >
              Water Soluble and Chiffon work
            </MenuItem>
          </MenuList>
         
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} sort={sort} key={id} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
