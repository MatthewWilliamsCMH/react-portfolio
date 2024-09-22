export default function ContactPage() {
  return (
    <div>
      <a href="mailto:matthewilliamscmh@icloud.com">
        <button type = "button">Send</button>
      </a>
      <label for = "name">Name:
        <input type = "text" id = "name" name = "name" required />
      </label>
      <label for = "email">Email address:
        <input type = "email" id = "email" name = "email" required />
      </label>
      <label for = "message">Message for Matthew:
        <textarea 
          id = "message" 
          name = "message" 
          spellcheck = "true" 
          max-width = "240" 
          min-width = "240" 
          resizeable = "true" 
          required
        />
      </label>
    </div>
  )
}