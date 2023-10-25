import React from "react";
import { InputStyled } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/contactListReducer";

export function Filter() {
    const dispatch = useDispatch();

    const filter = useSelector((state) => state.contactList.filter)

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value))
    }
    return (
        <label name="filter">
            <h3>Find contact by name</h3>
            <InputStyled
                name="filter"
                type="text"
                value={filter}
                onChange={handleFilterChange}
            />
        </label>
    )
}