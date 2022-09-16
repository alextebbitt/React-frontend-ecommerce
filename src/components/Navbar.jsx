import React from "react";
import styled from "styled-components";
// import EmailIcon from "@mui/icons-material/Email";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
border: 1px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding 5px;`

const Input = styled.input`
border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
font-weight: bold;`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input>
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
