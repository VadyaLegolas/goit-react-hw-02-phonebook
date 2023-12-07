import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            required
            onChange={this.handleChange}
          />
        </label>

        <br />
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            required
            onChange={this.handleChange}
          />
        </label>

        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
