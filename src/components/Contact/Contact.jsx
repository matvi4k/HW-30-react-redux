import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phoneBookReducer";
import "./Contact.css";

export function Contact({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  return (
    <li className="contact">
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
