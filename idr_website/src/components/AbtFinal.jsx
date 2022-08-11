import React from 'react'
import styled from 'styled-components'
import Popup from 'reactjs-popup';


const Container =styled.div`
background-color:#262626;
border-radius:15px;
padding:50px 20px;
margin:50px 40px;

display:flex;
flex-direction:column;
&:hover{
  transition: all 0.5s ease;
  transform: scale(1.1);
}
`
const Left = styled.div`
display:flex;
color:white;
flex-direction:column;
align-items:center;
justify-content:center;

`
const ImageContainer= styled.div`
display:flex;
align-items:center;
justify-content:center;

`
const Image = styled.img`
width:80%;
`
const Profile =styled.div`
padding-top:50px;
`

const Name =styled.p`
font-size:22px;`

const Designation =styled.p`
display:flex;
justify-content:center;
align-items:center;`


const Button =styled.button`
margin-top:8%;
width:50%
margin-left:2%;
cursor:pointer;
border:0px;
color:white;
font-size:16px;
background-color:#262626;
`
const NewBox = styled.div`
background-color:rgba(0,0,0,0.8);
width:100vw;
height:100vh;
// position:fixed;
display:flex;
align-items:center;
justify-content:center; 
`
const Modal = styled.div`
font-size: 12px;
background-color: #262626;
width:50%;
height:70vh;
margin-left:10%;
// position:fixed;
`
const Close =styled.button`
cursor: pointer;
position: absolute;
display: block;
padding: 2px 5px;
line-height: 20px;
right: 21%;
top: 16%;
font-size: 24px;
background: #ffffff;
border-radius: 18px;
border: 1px solid #cfcece;`
const Box = styled.div`
display:flex;
flex-direction:column;`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:25px`
const Img = styled.img`
width:20%;
padding:30px 0px;
margin-left:8%;`
const Header = styled.h1`
display:flex;
flex-direction:column;
width: 100%;
// border-bottom: 1px solid gray;
font-size: 28px;
text-align: center;
padding: 5px;
color:white;
`
const Content = styled.p`
width: 90%;
display:flex;
align-items:center;
justify-content:center;
// text-align:center;
// flex-direction:column;
color:white;

margin-left:4%;
font-size:15px;
`
const Actions = styled.div`
width: 100%;
padding: 10px 5px;
margin: auto;
text-align: center;`


const AbtFinal = ({item}) => {
  return (
    <Container>
        
     <Left>

        <ImageContainer>
            <Image src={item.img}/>
        </ImageContainer>

        <Profile>
            <Name>{item.name}</Name>
            <Designation>{item.designation}</Designation>
        </Profile>
    </Left>




    <Popup
    trigger={<Button> Read More </Button>}
    modal
    nested
  >
    {close => (
      <NewBox>
      <Modal>
        <Close onClick={close}>
          &times;
        </Close>
        <Box>
        <Top>
        <Img src={item.img}/> 
        <Header> {item.name}
        <br />{item.designation}</Header>
        </Top>
        <Content>
          {' '}
          {item.desc}
          <br />
          
        </Content>
        {/* <Actions>
          <Popup
            trigger={<Button> Trigger </Button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <Button
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </Button>
        </Actions> */}

        </Box>
      </Modal>
      </NewBox>  
    )}
  </Popup>







    </Container>
  )
}

export default AbtFinal