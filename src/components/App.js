import React from "react";
// import axios from 'axios';

import mockapi from "../api/mockapi";
import ContactList from "./ContactList";
// import Input from "./Input";
import Button from "./Button";
import ContactForm from "./ContactForm";

// import '../css/app.css';

class App extends React.Component {
  state = {
    isAddNewContact: false,
    contactList: [],
    subName: "",
    filteredResult: [],
  };

  componentDidMount() {
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

  onCancelClick = () => {
    this.setState({ isAddNewContact: false});
  };
  // add contact in state
  editContact(editedContact) {
    const filteredContactList = this.state.contactList.filter(
      (contact) => {
        if(editedContact.id === contact.id){
          return editedContact;
        }
        return contact;
      }
    );
    this.setState({ contactList: filteredContactList });
  }
  deleteContact(contactId) {
    const filteredContactList = this.state.contactList.filter(
      (contact) => contact.id !== contactId
    );
    this.setState({ contactList: filteredContactList });
  }
  onAddNewContact = async (newContact) => {
    
    const response = await mockapi.post("contacts", newContact);
    console.log("response on add", response);
    this.setState({ contactList: [...this.state.contactList, response.data],isAddNewContact:false});

    // this.setState({ contactList: this.state.contactList.push()});
  };
  onDeleteContact = async (id) => {
    console.log("deleting contact", id);
    const response = await mockapi.delete(`contacts/${id}`);
    console.log("response on delete", response);
    this.deleteContact(id);
  };

  onEditContact = async (editedContact) => {
    // const response = await mockapi.put("contacts", editedContact);
    // console.log("response on add", response);
    // this.editContact(editedContact);
    // this.setState({ isEditContact: false });
    console.log("editing contact");
  };

  // https://randomuser.me/api/?results=10
  async getContacts() {
    const response = await mockapi.get("contacts");

    console.log("response is", response.data);
    this.setState({ contactList: response.data });
    // this.setState({name:`${user.name.first} ${user.name.last}`, image:user.picture.large});
  }
  renderContent() {
    if (this.state.isAddNewContact) {
      return (
        <ContactForm
          positiveButton='Add'
          negativeButton='Cancel'
          onNegativeClick={this.onCancelClick}
          onPositiveClick={this.onAddNewContact}></ContactForm>
      );
    }
   
    return (
      <div>
        <Button
          text='New Contact'
          onButtonClick={() => {
            this.setState({ isAddNewContact: true });
          }}></Button>
        <ContactList
          contacts={this.state.contactList}
          onDeleteContact={this.onDeleteContact}
          onEditContact={this.onEditContact}
        />
      </div>
    );
  }
  render() {
    return this.renderContent();
  }
}

export default App;
