import React from "react";
import styled from "styled-components";


class AddContact extends React.Component{
    render() {
       return(
            <Container>
                <Content>
                    <Title>Add contact</Title>
                    <Form>
                        <Field>
                           <label>Name</label>
                           <input type="text" name="name" placeholder="nom"></input>
                        </Field>
                    </Form>

                    <Form>
                        <Field>
                           <label>Email</label>
                           <input type="email" name="email" placeholder="absc@gmail.com"></input>
                        </Field>
                    </Form>
                    <Buttom>Add</Buttom>
                </Content>
               
            </Container>
       );
    }
    
}

const Container = styled.div`
width:100%;




`
const Content = styled.div`

display: flex;
justify-content: center;
align-items: center;
align-content: center;
flex-direction: column;
width:100%;
height: 100%;
padding: 1rem;


`

const Title= styled.h2`



`
const Form = styled.form`





`
const Field=styled.div`

input{
    width: 100%;
    padding: 12px 50px;
    margin: 8px 0;
    box-sizing: border-box;
  }

`
const Buttom = styled.button`
   padding: 12px 100px;
   background: blue;
   color: white;
   border-radius: 50px;
   margin-top:10px;
   cursor:pointer;


`


export default AddContact