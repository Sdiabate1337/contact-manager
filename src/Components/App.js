
import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import styled from "styled-components";


function App() {
  
  const Contacts = [
    {
      id: "1",
      name: "diabate",
      email: "diabate@gmail.com"
    },
    {
      id: "2",
      name: "sekou",
      email: "sekou@gmail.com"
    }
  ]


  return (
      <div>
         <Header />
         <AddContact />
         <ContactList contacts = { Contacts } />
      </div>

   
  );
}

export default App;
