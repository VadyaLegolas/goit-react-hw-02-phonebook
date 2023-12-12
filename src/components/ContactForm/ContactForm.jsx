import { Component } from 'react';
import { Button, Form, Input, Label } from './ContactForm.styled';

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
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            required
            onChange={this.handleChange}
          />
        </Label>

        <br />
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            required
            onChange={this.handleChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
