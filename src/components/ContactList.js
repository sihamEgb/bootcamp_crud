import React from 'react';
import Contact from './Contact';

const ContactList = props => {
  const usersList = props.contacts.map(( user ) => 
    // <Avatar name={`${user.name.first} ${user.name.last}`} image={user.picture.large} />
    <Contact 
      key={user.id} 
      id = {user.id}
      name={user.name} 
      phone={user.phone}
      email={user.email}
      image={user.image} 
      onDeleteParent = {props.onDeleteContact}
      onEditParent = {props.onEditContact}
      />
  );

  return (<div>
            <div className="ui header">Contact List</div>
                <div className="ui cards">
                  {usersList}
               </div>
         </div>);
};

export default ContactList;
