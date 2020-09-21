import React from 'react';
import ContactForm from '../components/ContactForm'

class Contact extends React.Component {

	state = {isEditContact:false}
		//({id,name , phone,email, image , onEditParent , onDeleteParent}) 

		onSaveEdit = (editedContact) => {
			editedContact.id = this.props.id;
			this.props.onEditParent(editedContact);
			this.setState({ isEditContact: false });
			console.log(editedContact);
		}
		onEditClick = (event) => {
			this.setState({isEditContact:true});
			console.log(event);
		}
		onDeleteClick = (event) => {
			console.log(event);
			console.log("id to delete",this.props.id);
			this.props.onDeleteParent(this.props.id);
		}
		onCancelClick = (event) => {
			console.log(event);
			this.setState({isEditContact:false});
			// console.log("id to delete",id);
			// onDeleteParent(id);
		}
	
	
		render(){
			if (this.state.isEditContact) {
				return (
					<ContactForm
						positiveButton='Save'
						negativeButton='Cancel'
						onNegativeClick={this.onCancelClick}
						onPositiveClick={this.onSaveEdit}
						name = {this.props.name}
						phone = {this.props.phone}
						email = {this.props.email}
						image = {this.props.image}
						></ContactForm>
				);
			}
			
			return(
				<div className="ui card">
					<div className="content">
						<img className="right floated mini ui image" src={this.props.image} alt="profile"></img>
							<div className="header">
								{this.props.name}
							</div>
							<div className="meta">
							{this.props.email}
							</div>
						<div className="description">
							{this.props.phone}
						</div>
						<div className="extra content">
							<div className="ui two buttons">
								<div className="ui basic green button"
								onClick = {this.onEditClick}
								>Edit
								</div>
							<div className="ui basic red button"
								onClick = {this.onDeleteClick}
							>Delete</div>
						</div>
				</div>
					</div>
				</div>
				);
			}
}

 


export default Contact;