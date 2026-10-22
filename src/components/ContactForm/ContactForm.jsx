import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/phoneBookReducer";
import "./ContactForm.css";

export function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedName = name.trim().toLowerCase();
    const isDuplicate = contacts.some(
      (contact) => contact.name.trim().toLowerCase() === normalizedName,
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        name: name.trim(),
        number,
        id: crypto.randomUUID(),
      }),
    );
    setName("");
    setNumber("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form__field">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label className="contact-form__field">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {};
