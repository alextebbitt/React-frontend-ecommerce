import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;

  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
flex: 1
padding: 50px`;

const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px, 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <NavigateBeforeOutlinedIcon></NavigateBeforeOutlinedIcon>
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://tebbitttextiles.files.wordpress.com/2018/07/p1040481.jpg?w=521&h=&zoom=2" />
          </ImgContainer>
          <InfoContainer>
            <Title>Fabric Paper</Title>
            <Description>
              Making Fabric paper to use as a background for both hand and
              machine embroidery is a favourite pastime. The sheer creativity
              involved in making these pages and the fact that I can incorporate
              all those beautiful napkins and scraps of wrapping paper that I
              have squirrelled away only serves to increase my joy!
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src="https://tebbitttextiles.files.wordpress.com/2018/07/mermaid.jpg?w=326&h=&crop=1&zoom=2" />
          </ImgContainer>
          <InfoContainer>
            <Title>Cloth Dolls</Title>
            <Description>
              A recent passion is making Cloth Dolls. I used to run workshops
              covering the construction and the clothing of these beauties!
              Below you will find a selection of my favourites. They are dolls
              for looking at not for playing with (they are not toys). I love
              making their faces. I like them to be pretty, it is when I start
              the needle sculpting of their faces that their characters began to
              develop. I make their costumes at the end. They really do seem to
              direct me themselves!!
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="fbfafd">
          <ImgContainer>
            <Image src="https://tebbitttextiles.files.wordpress.com/2018/07/william-on-horse.jpg?w=408&h=&crop=1&zoom=2" />
          </ImgContainer>
          <InfoContainer>
            <Title>Bayeux Tapestry</Title>
            <Description>
              The Bayeux Tapestry has always fascinated me, so when I needed to
              produce something for an exhibition it was a short inspirational
              step to base a body of work on the tapestry. I used a book by
              David M Wilson (which contains sizable full colour reproductions
              of the tapestry) to choose the images and I developed a method of
              reproducing them using machine embroidery. Each picture that I
              produced gave me such satisfaction that I wanted to keep going,
              but what to do with them, could I really display them all
              individually in frames? Then I came up with the idea of making my
              own book of embroideries, I made the pages from fabric paper and
              never looked back!
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right">
        <NavigateNextOutlinedIcon></NavigateNextOutlinedIcon>
      </Arrow>
    </Container>
  );
};

export default Slider;
