import React from 'react';
import mockapi from '../api/mockapi';

class NewContact extends React.Component {
  
  state = {isAddNewContact:true,name:"", phone:"",email:"",image:""};
	
	handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
	};
	handleSubmit = (event) => {
    event.preventDefault();

    const formValues = [
      { title: "Name", value: this.state.name },
      {
        title: "Phone",
        value: this.state.phone,
      },
      {
        title: "Email",
        value: this.state.email,
      },
    ];
    this.props.onSurveySubmit(formValues);
	};
	handleCancel = (event) => {
		this.setState({isAddNewContact:false});
	}
	
	
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
  render(){
    return (
			<form onSubmit={this.handleSubmit}>
			<div>
				<label>Name:</label>
				<input
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.handleChange}
				/>
			</div>

			<div>
				<label>Phone:</label>
				<input
					type="text"
					name="phone"
					value={this.state.phone}
					onChange={this.handleChange}
				/>
			</div>

			<div>
				<label>Email:</label>
				<input
					type="text"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
			</div>
		
		
			<div>
				<input type="submit" value="Add" />
				<input type="cancel" value="Cancel" />
			</div>
		</form>
    );
  }
}

export default NewContact;