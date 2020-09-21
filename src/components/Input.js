import React from 'react';

class Input extends React.Component {
  
  state = { subName: '' };

  // onSearchInput = event => {
  //   this.props.onSubmit(this.state.subname);
  // };
  onChange = event => {
    // important, this must be in the callback function
    // of sesState , otherwise we send not updated value
    this.setState({ subName: event.target.value }
      , () =>
      {
        console.log(this.state.subName);
        this.props.onSearch(this.state.subName);
      }
      )
  }

  render(){
    return (
			<div className="ui segment">
        <label>Search avatar by name</label> 
        <input
              type="text"
              value={this.state.subName}
              // onChange={this.onChange}
              onChange={e => this.onChange(e)}

              />            
			</div>	
			);

  }
}

export default Input;