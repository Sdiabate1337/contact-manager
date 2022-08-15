import React from "react";
import styled from "styled-components";
import { IoArchiveOutline } from "react-icons/io5";
import user from "../images/user.png";


const ContactCard = (props) => {

    const {id, name, email} = props.contact;

    return (
        <Item>
              <Content>
              <img src={user} 
                style ={{width: "80px"}}   />
                <div style={{ width: "100%", marginLeft: "10px"}}>
                    <Name>{name}</Name>
                    <Email>{email}</Email>
                </div>
              
                <IoArchiveOutline 
                style={
                    {
                        fontSize: "40px",
                        color: "red",
                        cursor: "pointer"
                }}
                />
              </Content>
        </Item>
    );
}


const Item = styled.div`
margin-top: 10px;
width:75%;
border: 1px solid blue;
border-radius: 5px;
padding:10px;


`
const Content = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
align-content: center;
`
const Name = styled.div`
font-size: 20px;
text-transform: uppercase;
`
const Email = styled.div`
font-size: 18px;



`


export  default ContactCard;