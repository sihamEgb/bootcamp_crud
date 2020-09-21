import React from "react";
import mockapi from "../api/mockapi";
import ContactList from "./ContactList";
import Button from "./Button";
import ContactForm from "./ContactForm";
import Spinner from "../components/Spinner";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isAddNewContact: false,
      contactList: [],
      subName: "",
      filteredResult: [],
      isLoading:true,
    };
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
    this.setState({isLoading:true});
    const response = await mockapi.post("contacts", newContact);
    this.setState({ contactList: [...this.state.contactList, response.data],isAddNewContact:false});
    this.setState({isLoading:false});

  };
  onDeleteContact = async (id) => {
    this.setState({isLoading:true});
    await mockapi.delete(`contacts/${id}`);
    this.deleteContact(id);
    this.setState({isLoading:false});

  };

  onEditContact = async (editedContact) => {
    this.setState({isLoading:true});
    await mockapi.put(`contacts/${editedContact.id}`, editedContact);
    this.editContact(editedContact);
    this.setState({isLoading:false});

  };

  async getContacts() {
    const response = await mockapi.get("contacts");
    this.setState({ contactList: response.data });
    this.setState({isLoading:false});

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
    if(this.state.isLoading)
    {
      return <Spinner></Spinner>
    }
    else{
      return this.renderContent();
    }
  }
}

export default App;
