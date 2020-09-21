import React from 'react';
// import axios from 'axios';

import mockapi from '../api/mockapi';
import ContactList from './ContactList';
import Input from './Input';
import Button from './Button';
import NewContact from './NewContact';

// import '../css/app.css';

class App extends React.Component {
  
  state = {isAddNewContact:false,contactList:[],subName:"",filteredResult:[]};

  componentDidMount(){
    this.getContacts();
  }
  
  // onSearchParent = (newSearch) => {
  //   this.setState({subName:newSearch},
  //     () => {
  //       const filteredSearch = this.state.avatarList.filter(
  //         avatar => {
  //           return (avatar.name.toLowerCase().includes(this.state.subName.toLowerCase()));
            
  //         }
  //       )
  //       this.setState({filteredResult:filteredSearch});
  //     }
  //     )
 
  // };
  
  onAddNewContact = async (newContact)=>{
    this.setState({isAddNewContact:true});
    console.log("adding new contact");

    const contact = {
      name: 'siham egb',
      phone: '444444444',
      email: 'siham.egb@gmail.com',
      // name: this.state.name

    };

    const response = await mockapi.post('contacts/id');
    this.setState({ contactList: this.contactList.push(response.data)});

    console.log("response on add",response);


  }
   onDeleteContact = async (id) => {
    console.log("deleting contact");
    const response = await mockapi.delete('contacts/id');
    console.log("response on delete",delete);
  }
  onEditContact = (phone) => {
    console.log("editing contact");
  }
  // https://randomuser.me/api/?results=10
  async getContacts(){
    
    const response = await mockapi.get('contacts');
   
    console.log("response is",response.data);
    this.setState({ contactList: response.data});
    // this.setState({name:`${user.name.first} ${user.name.last}`, image:user.picture.large});
  }
  render(){
    return (
      <div className="ui container">
        {this.state.isAddNewContact 
        ?<NewContact