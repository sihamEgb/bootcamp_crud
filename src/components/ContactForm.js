import React from "react";
import Button from "../components/Button";
import faker from "faker";

class ContactForm extends React.Component {

	constructor(props){
		super(props);
		this.state = { isAddNewContact: true, name: props.name || "", phone: props.phone || "", email: props.email || "", image: props.image || ""};
	}

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
			image: this.state.image,
	  };
		if(!this.state.image)
		{
			contact.image = faker.image.avatar();	
		}
		if(contact.name.length >= 5)
		{
    	this.props.onPositiveClick(contact);
		}
		else{
			this.setState({name : "Insert 5+ letters"});
		}
  };

  
  handleCancel = (event) => {
    this.setState({ isAddNewContact: false });
  };

	render() {
    return (
      <div className="ui form">
				<div className="field">
	
					<div className="field">
						<label>Name:</label>
						<input
							type='text'
							name='name'
							value={this.state.name}
							onChange={this.handleChange}
						/>
					</div>

					<div className="field">
						<label>Phone Number</label>
						<input
							type='text'
							name='phone'
							placeholder="(xxx-xxx-xxxx)"
							value={this.state.phone}
							onChange={this.handleChange}
						/>
					</div>

					<div className="field">
						<label>E-mail</label>
						<input
							type='email'
							name='email'
							placeholder="joe@schmoe.com"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>Image URL:</label>
						<input
							type='text'
							name='image'
							value={this.state.image}
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
				</div>
      </div>
    );
  }
}

export default ContactForm;
