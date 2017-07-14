import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  renderField(field) { // field argument holds the event handler
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

    return (
      <div className={ className }>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/'); // naviates me to another page
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <h3>Create Your Post</h3>
        <Field
          label="Title"
          name="title"
          component={ this.renderField } // function goes inside
        />
        <Field
          label="Category"
          name="categories"
          component={ this.renderField } // function goes inside
        />
        <Field
          label="Content"
          name="content"
          component={ this.renderField } // function goes inside
        />
        <button type="submit" className="btn btn-success">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) { // contains all the values the user inputs into the form
  const errors = {}; // Start by creating errors obkect

  // Valudate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some content pelase";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // if errors is empty, the form is fine to submit
  // If errors has *any* properties, redux for massumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
