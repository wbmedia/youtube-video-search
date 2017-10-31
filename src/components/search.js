// import dependencies
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ''};
	}
	render() {
		return (
		<div className="field">
			<div className="label">Buscar Video</div>
			<div className="control">
				<section>
					<div className="columns">
						<div className="column">
							<input 
							value={this.state.term}
							onChange={e => this.onInputChange(e.target.value)}
							className="input" />
						</div>
					</div>
				</section>
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

