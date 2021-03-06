import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "./mailchimp.css"

function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { result, msg } = await addToMailchimp(email)
    result === "success" && setEmail("")
    // Removes the HTML returned in some response messages in case of error
    setMessage(msg.split("<")[0])
    setStatus(result)
  }

  const handleChange = (event) => setEmail(event.target.value)

  return (
    <form className="subscribe-form">
      <span className="subscribe-form__title">
        <span className="block font-mono text-3xl">TENEMOS NEWSLETTER!</span>
        Queres recibir nuestros mails?
      </span>
      <div className="subscribe-form__content">
        <label className="hidden" htmlFor="mail-chimp">
          Mailchimp
        </label>
        <input
          className="text-xl text-center subscribe-form__input"
          id="mail-chimp"
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="tumail@inventado.com"
          required
        />
        <span
          status={status}
          className={
            status === "success"
              ? "subscribe-form__message_success"
              : "subscribe-form__message_failure"
          }
        >
          {message}
        </span>
      </div>
      <button
        className="subscribe-form__button"
        type="submit"
        onClick={handleSubmit}
      >
        Obvio que me susbribo!
      </button>
    </form>
  )
}

export default SubscribeForm
