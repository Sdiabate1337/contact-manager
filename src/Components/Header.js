import React from "react";
import styled from "styled-components";



const Header = () => {
    return (
     <Container>
        <Content>
            <h1 >contact manager</h1>
        </Content>
     </Container>

    )
}



const Container = styled.div `
  height:5rem;
  background: blue;

`
const Content = styled.div`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
    height:5rem;
    display: flex;
    justify-content:center;
    align-content: center;
    align-items= center;
    font-family: "Roboto", sans-serif;
    color: white;

`




export default Header;

