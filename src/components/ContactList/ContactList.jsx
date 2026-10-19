import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import "./ContactList.css";

export function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter.trim().toLowerCase());
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter),
  );

  return (
    <ul className="contact-list">
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {};
