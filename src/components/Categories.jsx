import styled from "styled-components";
import {categories} from "../data"
import CategoriesItem from "./CategoriesItem";

const Container = styled.div``

const Categories = () => {
  return <Container>
    {categories.map(item=> (<CategoriesItem item={item}/>))}
  </Container>;
};

export default Categories;
