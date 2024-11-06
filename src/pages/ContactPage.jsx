import "./css/contact.css";
import React, { useState } from "react";

export default function ContactPage() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "This field is required." }));
    } 
    else {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    }
  };
  const handleBlur = (event) => {
    const {name, value} = event.target;
    validateField(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }
    setName = ("");
    setEmail = ("");
    setMessage = ("");
  }
  return (
    <div id = "form">
      <form onSubmit = {handleSubmit}>
        <label htmlFor = "name">Name:</label><br />
        <input 
          type = "text" 
          id = "name" 
          name = "name"
          onChange = {(event) => setName(event.target.value)} 
          onBlur = {handleBlur} 
          placeholder = {errors.name}
          />

        <label htmlFor = "email">Email address:</label><br />
        <input 
          type = "email" 
          id = "email" 
          name = "email"
          onChange = {(event) => setEmail(event.target.value)} 
          onBlur = {handleBlur}
          placeholder = {errors.email}
        />

        <label htmlFor = "message">Message for Matthew:</label><br />
        <textarea 
          name = "message" 
          id = "message" 
          spellCheck = "true" 
          resizeable = "true" 
          onChange = {(event) => setMessage(event.target.value)} 
          onBlur = {handleBlur} 
          placeholder = "This form is not currently functional."
          
        />

        <button type = "button">Send</button>
      </form>
    </div>
  )
}