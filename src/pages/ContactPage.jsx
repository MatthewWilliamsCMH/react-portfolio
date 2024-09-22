import './css/contact.css';

export default function ContactPage() {
  return (
    <form>
      <label htmlFor = "name">Name:</label><br />
      <input type = "text" id = "name" name = "name" required />
      <p></p>
      <label htmlFor = "email">Email address:</label><br />
      <input type = "email" id = "email" name = "email" required />
      <p></p>
      <label htmlFor = "message">Message for Matthew:</label><br />
      <textarea 
        id = "message" 
        name = "message" 
        spellCheck = "true" 
        resizeable = "true" 
        required
      />
      <p></p>
      <a href="mailto:matthewilliamscmh@icloud.com">
        <button type = "button">Send</button>
      </a>
    </form>
  )
}