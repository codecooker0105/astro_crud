import { addContact } from "../states/contacts"

import useField from "../hooks/useField"

export default function ContactForm() {
  const nameInput = useField("text")
  const emailInput = useField("email")
  const phoneInput = useField("number")

  const handleSubmit = e => {
    e.preventDefault()

    const contact = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value
    }

    addContact(contact)
  } 

  return (
    <form onSubmit={handleSubmit}
      className="p-4 rounded-lg text-white bg-slate-800 flex flex-col justify-center items-center">
      <label className="m-2">
        <p>name:</p>
        <input {...nameInput} className="text-black" />
      </label>
      <label className="m-2">
        <p>Email:</p>
        <input {...emailInput} className="text-black" />
      </label>
      <label className="m-2">
        <p>phone:</p>
        <input {...phoneInput} className="text-black" />
      </label>
      <button type="submit"
        className="p-2 my-2 transition-all bg-orange-400 text-black font-bold rounded-full
          hover:bg-orange-500 active:scale-95"
        >
        Guardar Contacto!
      </button>
    </form>
  )
}