import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {

	state = {
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: ''
		}
	};

	render() {
		return (
			<div>
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="Logo" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							{/* <Badge
								firstName={this.state.form.firstName}
								lastName={this.state.form.lastName}
								avatarUrl="https://www.gravatar.com/avatar?d=identicon"
								jobTitle={this.state.form.jobTitle}
								email={this.state.form.email}
								twitter={this.state.form.twitter} /> */}
						</div>

						<div className="col-6">
							<BadgeForm formValues={this.state.form} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeNew;