import { useSelector } from "react-redux";
import { ContactListItem } from "../ContactList/ContactListItem";
import { EmptyTxt } from "./ContactList.styled";

export function ContactList() {

    const contacts = useSelector((state) => state.contactList.contacts);
    const filter = useSelector((state) => state.contactList.filter)

    const filterContactsByName = () => {
        const ff = filter.toLowerCase() ?? '';
        return contacts.filter(contact => contact.name.toLowerCase().includes(ff))
    }

    const list = filterContactsByName();

    return (
        <ul>
            {list.length
                ? (list.map(({ id, name, number }) =>
                    <ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                    />
                ))
                : (<EmptyTxt>Contact list is empty</EmptyTxt>)
            }
        </ul>
    )
}