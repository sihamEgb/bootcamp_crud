import React from 'react';

// import '../css/app.css';

const Contact = ({id,name , phone,email, image , onEditParent , onDeleteParent}) => {
	const onEditClick = (event) => {
		onEditParent(id);
		console.log(event);
	}
	const onDeleteClick = (event) => {
		console.log(event);
		console.log("id to delete",id);
		onDeleteParent(id);
	}
	return(
		<div className="ui card">
			<div className="content">
				<img className="right floated mini ui image" src={image} alt="profile"></img>
					<div className="header">
						{name}
					</div>
					<div className="meta">
					{email}
					</div>
				<div className="description">
					{phone}
				</div>
				<div className="extra content">
      		<div className="ui two buttons">
        		<div className="ui basic green button"
						onClick = {onEditClick}
						>Edit
						</div>
        	<div className="ui basic red button"
						onClick = {onDeleteClick}
					>Delete</div>
      	</div>
    </div>
			</div>
		</div>
		);
}
 


export default Contact;