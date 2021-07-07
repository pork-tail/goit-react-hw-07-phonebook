import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

import { connect } from "react-redux";
import { removeContacts } from "../../redux/contacts/contacts.operations";
import { getFilterContactsSelector } from "../../redux/contacts/contacts.selector";

const ContactList = ({ items, handleDelete }) => {
  return (
    <ul className={styles.list}>
      {items.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.deleteContact}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};

const mapState = (state) => {
  return {
    items: getFilterContactsSelector(state),
  };
};

const mapDispatch = {
  handleDelete: removeContacts,
};

export default connect(mapState, mapDispatch)(ContactList);
