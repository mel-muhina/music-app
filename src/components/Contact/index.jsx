import React from 'react'
import { useState } from 'react';
import "./Contact.css"

export default function Contact() {

    const [inputText, setInputText] = useState('');
    const [inputMessage, setinputMessage] = useState('');
    // const [inputData, setInputData] = useState({
    //     inputText: "",
    //     inputMessage: ""
    // });

    // const [inputText, setInputText] = useState([
    //     { id: 1, value: '' },
    //     { id: 2, value: '' }
    // ]);

    function handleInput(e) {
        setInputText(e.target.value);
        // setinputMessage(target.value)       
    }

    function handleInputMessage(e) {
       setinputMessage(e.target.value)       
    }
    

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Pressing on button")
       
        setInputText('')
        setinputMessage('')
    }



  return (
    <>
        <section className="contact-container">
            <h1 className='contacth1'>Contact Me</h1>

            <form onSubmit={handleSubmit} className="contact-form"> 
                <label htmlFor="name">Name:</label>
                <input
                    name="name"
                    type="text"
                    className='contact-form-input'
                    value={inputText}
                    onChange={handleInput}
                    required
                />

                 <label htmlFor="message">Message:</label>
                 <input
                    name="message"
                    type="text"
                    className='contact-form-input'
                    value={inputMessage}
                    onChange={handleInputMessage}
                    required
                />
                <button
                    type="submit"
                    className='contact-button'
                >
                    Send Message
                </button>
            </form>
        </section>
    </>
    
  )
}
