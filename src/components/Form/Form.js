import css from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operation";

export const Form = () => {

  const dispatch = useDispatch();
  const loginInputId = nanoid();

  const numberInputLabelId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    dispatch(addContact({ name: name, number: phone }));
    form.reset();
  };
  
  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label htmlFor={loginInputId}>Name</label> 
      <input className={css.input} id={loginInputId} type="text" name="name"  required placeholder="Name"></input>
      <label htmlFor={numberInputLabelId}>Phone number</label> 
      <input className={css.input} id={numberInputLabelId} type="tel" name="phone" pattern="\+?\d{1,4}?[ .\\-\\s]?\(?\d{1,3}?\)?[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,9}" required placeholder="Number"></input>
      <button type="submit">Add contact</button>
    </form>
  )
};