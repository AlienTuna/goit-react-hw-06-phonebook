import { useDispatch } from "react-redux";
import { BtnStyled, ItemStyled, NameStyled } from "./ContactListItem.styled";
import PropTypes from "prop-types";
import { deleteContact } from "redux/contactListReducer";

export function ContactListItem({ id, name, number }) {
    const dispatch = useDispatch();
    return (
        <ItemStyled id={id}>
            <span><NameStyled>{name}: </NameStyled>{number}</span> 
            <BtnStyled 
            title="Delete"
            onClick={() => dispatch(deleteContact(id))}
            >❌</BtnStyled>
        </ItemStyled>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    number: PropTypes.string.isRequired,
}