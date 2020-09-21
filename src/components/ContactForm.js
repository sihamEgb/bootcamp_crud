import React from "react";
// import mockapi from "../api/mockapi";
import Button from "../components/Button";

class ContactForm extends React.Component {
  state = { isAddNewContact: true, name: this.props.name, phone: this.props.phone, email: this.props.email, image: this.props.image };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  onPositiveChild = (event) => {
    const contact = {
      name: this.state.name,
      phone: this.state.phone,
			email: this.state.email,
			//TODO change image url
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
    this.props.onPositiveClick(contact);
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  // };
  handleCancel = (event) => {
    this.setState({ isAddNewContact: false });
  };

  // onAddNewContact = ()=>{
  //   console.log("child button clicked");
  // 	this.addNewContact();
  // 	// this.setState({avatarList:this.state.filteredResult});

  // }
  // https://randomuser.me/api/?results=10
  // async addNewContact(){

  //   const response = await mockapi.get('contacts');

  //   console.log("response is",response.data);
  //   this.setState({ contactList: response.data});
  //   // this.setState({name:`${user.name.first} ${user.name.last}`, image:user.picture.large});
  // }
  render() {
    return (
      <form>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type='text'
            name='phone'
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <Button
            text={this.props.positiveButton}
            onButtonClick={this.onPositiveChild}></Button>
          <Button
            text={this.props.negativeButton}
            onButtonClick={this.props.onNegativeClick}></Button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
