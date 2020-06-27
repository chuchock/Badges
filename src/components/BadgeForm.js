import React from 'react';

class BadgeForm extends React.Component {

	// handleSubmit = (e) => {
	// 	/* evitar que formulario haga submit al hacer click en botón,
	// 	tambien puese hacerse cambiando el type del button*/
	// 	e.preventDefault();

	// 	console.log(this.state);
	// }


	render() {
		return (
			<div>
				<h1>New Attendant</h1>

				<form onSubmit={this.props.onSubmit}>

					<div className="form-group">
						<label htmlFor="">First Name</label>
						{/*<input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.state.firstName}/>*/}
						<input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} />
					</div>

					<div className="form-group">
						<label htmlFor="">Last Name</label>
						{/*<input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.state.lasttName}/>*/}
						<input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
					</div>

					<div className="form-group">
						<label htmlFor="">Email</label>
						{/* <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.state.email}/>*/}
						<input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email} />
					</div>

					<div className="form-group">
						<label htmlFor="">Job Title</label>
						{/* <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle}/> */}
						<input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
					</div>

					<div className="form-group">
						<label htmlFor="">Twitter</label>
						{/* <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.state.twitter} /> */}
						<input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} />
					</div>

					<button type="button" onClick={this.handleSubmit} className="btn btn-primary">Save</button>
				</form>
			</div>
		);
	}
}

export default BadgeForm;