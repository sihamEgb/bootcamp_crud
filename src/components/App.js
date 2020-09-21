import React from "react";
import mockapi from "../api/mockapi";
import ContactList from "./ContactList";
import Button from "./Button";
import ContactForm from "./ContactForm";


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

  onCancelClick = () => {
    this.setState({ isAddNewContact: false});
  };

  editContact = (editedContact) => {
    const filteredContactList = this.state.contactList.map(
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
    this.setState({ contactList: [...this.state.contactList, response.data],isAddNewContact:false});

  };
  onDeleteContact = async (id) => {
    await mockapi.delete(`contacts/${id}`);
    this.deleteContact(id);
  };

  onEditContact = async (editedContact) => {
   await mockapi.put(`contacts/${editedContact.id}`, editedContact);
    this.editContact(editedContact);
  };

  async getContacts() {
    const response = await mockapi.get("contacts");
    this.setState({ contactList: response.data });
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
