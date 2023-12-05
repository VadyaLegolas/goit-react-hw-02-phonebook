import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {};

  render() {
    return (
      <>
      <form>
        <input type="text" name="name" required onChange={this.handleChange} />
        <button>Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ul>
        <li></li>
      </ul>
      </>
    );
  }
}
