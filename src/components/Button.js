import React from 'react';


const Button = ({text,onButtonClick}) => {
	return(
		<button 
			className="ui button primary"
			onClick={onButtonClick}
			>
			{text}
		</button>	

		);
}
 


export default Button;

  

