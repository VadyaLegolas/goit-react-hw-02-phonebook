import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handleAddContact = e => {
    e.preventDefault();
    const id = nanoid();
    const contact = { id, name: this.state.name };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddContact}>
          <input
            type="text"
            name="name"
            required
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>
      </>
    );
  }
}
