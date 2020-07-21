import React from 'react';

import './styles/BadgeEdit.css';

//importar sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js'

import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component {

	state = {
		loading: true,
		error: null,
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: ''
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async e => {
		this.setState({ lading: true, error: null });

		try {
			const data = await api.badges.read(
				this.props.match.params.badgeId
			)

			this.setState({ loading: false, form: data })
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	handleChange = e => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	}

	alertaFaltanDatos(faltantes) {
		Swal.fire({
			title: 'Alto ahi!',
			text: `Te faltan campos por rellenar 🧐\n ${faltantes}`,
			icon: 'error'
		});
	}

	alertaError() {
		Swal.fire({
			title: 'Opps!',
			text: `Ha ocurrido algo inesperado 😅, vuelve a intentarlo nuevamente`,
			icon: 'error'
		});

		// Controlar cuando sea un error 500 para que mande un mensaje que los server estan caidos o algo
	}

	alertaExitosa() {
		Swal.fire({
			title: 'Actualización Exitosa!',
			text: '😊',
			icon: 'success'
		}).then((result) => {
			if (result.value || !result.value) {
				this.props.history.push('/badges');
			}
		});
	}

	handleSubmit = async e => {
		e.preventDefault();

		this.setState({ loading: true, error: null });

		try {
			await api.badges.update(this.props.match.params.badgeId, this.state.form);
			this.setState({ loading: false });

			this.alertaExitosa();
		} catch (error) {
			this.setState({ loading: false, error: error });
			this.alertaError();
		}
	};

	render() {
		if (this.state.loading) {
			return <PageLoading />
		}

		return (
			<React.Fragment>
				<div className="BadgeEdit__hero">
					<img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.firstName || 'FIRST_NAME'}
								lastName={this.state.form.lastName || 'LAST_NAME'}
								jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
								email={this.state.form.email || 'EMAIL'}
								twitter={this.state.form.twitter || 'twitter'}
								avatarUrl="https://www.gravatar.com/avatar?d=identicon" />
						</div>

						<div className="col-6">
							<h1>Edit Attendant</h1>
							<BadgeForm
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								formValues={this.state.form}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeEdit;