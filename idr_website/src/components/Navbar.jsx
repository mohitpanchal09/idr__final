import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { mobile } from '../responsive';
import { mobile2 } from '../responsive';
import { mobile3 } from '../responsive';
import {mobile6} from '../responsive';
const Container = styled.div`
    
    background-color: black;
    color:white;
`
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
;


;
const Center = styled.div`
text-align:center;
flex:1;
${mobile({display:"flex",flexDirection:"row",width:"50%"})}


`;


;
const Button = styled.button`
font-weight: bold;
border:none;
margin:0px 10px;
color:white;
background-color:black;
font-size:15px;
cursor:pointer;
${mobile({margin:"0px 2px"})};
${mobile({margin:"0px 1px",fontSize:"12px"})};
${mobile6({display:"none"})};




`
const Image2 = styled.img`
  height:10vh;
  ${mobile({height:"7vh"})}
  
`
const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content:flex-end;

`
;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left:25px;
${mobile6({display:"none"})};
`
const Image = styled.img`
height:2vh;
margin-left:10px;
${mobile6({display:"none"})};
`
const Hemburger = styled.div`
display:none;
cursor:pointer;
${mobile6({display:"block"})};
`
const Bar = styled.div`
display:block;
width:25px;
height:3px;
margin: 5px auto;
-webkit-transition: all 0.3s ease-in-out;
transition: all 0.3s ease-in-out;
background-color:white;

`;

const Navbar = () => {
  return (
    <Container>
     <Wrapper>
      <Left>
        <Image2 src="https://cdn.discordapp.com/attachments/891025496601661504/994691728579768382/unknown.png" />
        </Left>
      <Center>
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/about"><Button>AboutUs</Button></Link>
        <Button>Product</Button>
        <Link to="/contact"><Button>ContactUs</Button></Link>
        
      
      </Center>
      <Right>
        <MenuItem>Made In India</MenuItem>
        <Image src="https://cdn.discordapp.com/attachments/891025496601661504/994337086209527960/9-2-india-flag-picture.png"/>
        <Hemburger ><Bar></Bar>
        <Bar></Bar>
        <Bar></Bar></Hemburger>
      </Right>
     </Wrapper>
    </Container>
  )
}

export default Navbar;