import './css/contact.css';

export default function ContactPage() {
  return (
    <div id = "form">
      <form>
        <label htmlFor = "name">Name:</label><br />
        <input type = "text" id = "name" name = "name" required />
        <label htmlFor = "email">Email address:</label><br />
        <input type = "email" id = "email" name = "email" required />
        <label htmlFor = "message">Message for Matthew:</label><br />
        <textarea 
          id = "message" 
          name = "message" 
          spellCheck = "true" 
          resizeable = "true" 
          required
        />
        <a href="mailto:matthewilliamscmh@icloud.com">
          <button type = "button">Send</button>
        </a>
      </form>
    </div>
  )
}

//Does this form need to be functional? The Readme doesn't say so, and it's not possible to send an email directly from the jsx without a backend (I think).