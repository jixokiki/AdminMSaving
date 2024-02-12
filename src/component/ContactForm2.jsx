import "./ContactForm.css";
import axios from'axios';
// import e from "express";
import React, {useState, useRef} from "react";

import emailjs from '@emailjs/browser';
import Navbar from "../platform/Navbar";
import NavbarHome2 from "../platform/NavbarHome2";

function ContactForm2 (){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [handphone, setHandphone] = useState('');
  
    const form = useRef();
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post('http://localhost:4000/dataemail', {
          email,
          name,
          message,
          handphone
        });
  
        alert('Data submitted successfully!');
      } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
      }
    };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_t6mlmj5', 'template_xs0oigp', form.current, '9aiO7AYKid7alk5K0')
          .then((result) => {
              console.log(result.text);
              alert('Data submitted successfully!');
          }, (error) => {
              console.log(error.text);
              alert('An error occurred. Please try again.');
          });
      };
    return (
        <div className="form-container">
            <NavbarHome2/>
            <h1>Send a message to us!</h1>
            {/* <form> */}
                {/* <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="No.Handphone" />
                <textarea placeholder="Message" rows="4" ></textarea>
                <button>Send Message</button> */}
                 {/* <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                 <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                 <input type="handphone" placeholder="No.Handphone" onChange={e=> setNomor(e.target.value)} />
                 <textarea placeholder="Message" onChange={e => setMessage(e.target.value)} />
                 <button onClick={handleSendEmail}>Send Email</button> */}
            {/* </form> */}
            <form ref={form} onSubmit={sendEmail}>
                    <label>Email:</label>
                    <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label>Name:</label>
                    <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} />

                    <label>Message:</label>
                    <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />

                    <label>No.Handphone:</label>
                    <input type="text" name="nomor_handphone" value={handphone} onChange={(e) => setHandphone(e.target.value)} />

                 <button type="submit">
                    <h7>Submit</h7>
                </button>
                    {/* <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" /> */}
      </form>
        </div>
    )
}

export default ContactForm2;