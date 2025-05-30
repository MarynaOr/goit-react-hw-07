import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import s from "./ContactList.module.css";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { selectFilteredContacts } from "../../redux/selectFilteredContacts";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contactsSlice";
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <>
      <div className={s.con}>
        <ContactForm />
        <SearchBox />
        <ul className={s.item}>
          {contacts.length > 0 ? (
            contacts.map(({ id, name, phone }) => (
              <li className={s.list} key={id}>
                <Contact id={id} name={name} phone={phone} />
              </li>
            ))
          ) : (
            <p>Немає контактів</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
