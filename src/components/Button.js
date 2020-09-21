import React from 'react';


const Button = ({text,onButtonClick}) => {
	return(
		<button 
			type ="button"
			className="ui button primary"
			onClick={onButtonClick}
			>
			{text}
		</button>	

		);
}
 


export default Button;

  

