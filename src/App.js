import { Component } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";

import { connect } from "react-redux";
import {
  addNewContacts,
  getAllContacts,
} from "./redux/contacts/contacts.operations";
import { getFormatFilterSelector } from "./redux/contacts/contacts.selector";

class App extends Component {
  state = {
    items: [],
    filter: "",
  };

  handleSubmit = (term) => {
    const isDuplicate = this.state.items.some(
      (item) => item.name === term.name
    );
    if (isDuplicate) {
      alert("Такой контакт уже существует " + term.name);
      return;
    }

    const newContact = {
      name: term.name,
      number: term.number,
    };
    this.props.addNewContacts(newContact);
  };

  render() {
    const { items, filter } = this.props;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.props.handleChange} />
        <ContactList items={items} handleDelete={this.props.handleDelete} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    items: getFormatFilterSelector(state),
    filter: state.filter,
  };
};

const mapDispatch = {
  addNewContacts,
  getAllContacts,
};

export default connect(mapState, mapDispatch)(App);
