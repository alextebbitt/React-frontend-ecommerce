import React from "react";
import styled from "styled-components";
// import EmailIcon from "@mui/icons-material/Email";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {mobile} from "../responsive";

const Container = styled.div`
  height: 60px;
 ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
border: 1px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding 5px;`

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "16px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search">
            </Input>
            <SearchIcon style={{color: "grey", fontSize:16}}></SearchIcon>
          </SearchContainer>
        </Left>

        <Center>
          <Logo>Tebbitt Textiles </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <ShoppingCartOutlinedIcon ></ShoppingCartOutlinedIcon> </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
