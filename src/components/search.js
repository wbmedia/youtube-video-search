// import dependencies
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ''};
	}
	render() {
		return (
		<div >
			<div>Buscar Video</div>
			<div className="form-group">
				<input 
				value={this.state.term}
				onChange={e => this.onInputChange(e.target.value)}
				className="form-control" />
			</div>
		</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;

