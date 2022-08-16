import React from "react";
import styled from "styled-components";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
   

    const renderContactList = props.contacts.map((contact) => {
        return(
           <ContactCard  contact = {contact}/>
        );
       
    });
   
   
   
    return(
        <Container>
            <Content>
                <Title> Contact List</Title>
                {renderContactList}
            </Content>
        </Container>
    );
}



const Container = styled.div`
width:100%;
border-top: 10px solid blue;


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
const Title = styled.div`
 text-align: center;
 font-size: 20px;
`


export default ContactList;