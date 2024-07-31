import { useState } from "react"

export const ContactForm = () => {
    const [contact, setContact] = useState({username:"",email:"",message:"",})

    const handleInput = (e) => {
        const {name,value} = e.target;
        setContact((prev)=>({
            ...prev,[name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
    }
  return (
    <div>
        <h1>Contact Form</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="type username" required autoComplete="off" value={contact.username} onChange={handleInput} />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="type email" required autoComplete="off" value={contact.email} onChange={handleInput} />
            <label htmlFor="message">Message</label>
            <textarea type="password" name="message" placeholder="type message" required autoComplete="off" rows="6" value={contact.message} onChange={handleInput}></textarea>

            <button>Submit</button>
        </form>
    </div>
  )
}
