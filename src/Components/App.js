
import React ,{useState, useEffect} from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';


function App() { 
const LOCAL_STORAGE_KEY = "contacts";
const [Contacts, setContact] = useState([]);



const addCotactHandler = (contact) =>{
  setContact([...Contacts, {id: uuidv4(), ...contact}]);
};

useEffect(() =>{
  const getContact = localStorage.getItem(LOCAL_STORAGE_KEY);
  const retrieveContact = JSON.parse(getContact);

  if(retrieveContact)  setContact(retrieveContact);

},[]);

useEffect(() =>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contacts));
}, [Contacts]);



  return (
      <div>
         <Header />
         <AddContact addCotactHandler = {addCotactHandler}/>
         <ContactList contacts = { Contacts } />
      </div>

   
  );
}

export default App;
