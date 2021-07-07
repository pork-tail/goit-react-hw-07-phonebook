import PropTypes from "prop-types";
import styles from "./Filter.module.css";

import { connect } from "react-redux";
import { filterChange } from "../../redux/contacts/contacts.actions";
import { contactsFilterSelector } from "../../redux/contacts/contacts.selector";

const Filter = ({ handleChange, filter }) => {
  return (
    <label className={styles.title} htmlFor="filter">
      Find contacts by name:
      <input
        className={styles.input}
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapState = (state) => {
  return {
    filter: contactsFilterSelector(state),
  };
};

const mapDispatch = {
  handleChange: filterChange,
};

export default connect(mapState, mapDispatch)(Filter);
