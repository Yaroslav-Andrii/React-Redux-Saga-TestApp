import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPosts, showAlert } from '../redux/actions';

class PostForm extends Component {
	state = {
		title: '',
		body: ''
	}

	submitHandler = e => {
		e.preventDefault();

		if (!this.state.title.trim()) {
			this.props.showAlert('Write title')
			return;
		}

		const newPost = {
			title: this.state.title,
			body: this.state.body,
			id: Date.now().toString(),
		}

		this.setState({
			title: '',
			body: ''
		})

		this.props.createPosts(newPost);
	}

	changeInputHandler = e => {
		e.persist();
		this.setState(prev => ({
			...prev, 
			...{
				[e.target.name]: e.target.value
			}
		}))
	}

	render() {
		return (
			<>
				<form className="mb-3" onSubmit={this.submitHandler}>	

				{
					this.props.alert &&
					<div className="alert alert-warning" role="alert">
						<strong>{this.props.alert}!</strong>
					</div>
				}

					<div className="form-group">
						<label htmlFor="titleFrom"><b>Title</b></label>
						<input 
							type="text" 
							className="form-control  form-control-lg" 
							id="titleFrom"
							name="title"
							value={this.state.title}
							onChange={this.changeInputHandler}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="textFrom"><b>Text</b></label>
						<textarea 
							className="form-control" 
							id="textFrom" 
							name="body"
							rows="3"
							value={this.state.body}
							onChange={this.changeInputHandler}
						></textarea>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
				<hr/>
			</>
		);
	}
}

const mapDispatchToProps = {
	createPosts,
	showAlert
}

const mapStateToProps = state => {
	return {
		alert: state.app.alert,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);