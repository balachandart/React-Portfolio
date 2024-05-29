import React, { useRef,useState } from 'react';
import './Contacts.css'
import { contactInfo } from '../../data'
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const [firstname,setFirstName]=useState("");
  const [secondName,setSecondName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [message,setMessage]=useState("");
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
      
    emailjs
      .sendForm('service_sbdn10k', 'template_6zwgh4b', form.current, {
        publicKey: 'WNWEeKLbVLvFxLSqD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message Sent Sucessfully..")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Message not Reached..")
        },
      ) 
      setFirstName("")
      setSecondName("")
      setEmail("")
      setPhone("")
      setMessage("")
  };
  return (
    <section id='contact'>
      <div className='container full__height'>
        <h3 className='sub__title'>Got Some Question?</h3>
        <h1 className='title'>
          <span className="text__gradient">Contact Me</span>
        </h1>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="column">
            <h3 className="sub__title color__primary">Contact Info</h3>
            <p>Don't like forms? Send me an email</p>
            <div className="contact__info__container">
              {
                contactInfo.map((data,index)=>(
                    <div className="contact___info" key={index}>
                      <div className="icon__container">
                        {data.icon}
                      </div>
                      <p>{data.value}</p>
                    </div>
                ))
              }
            </div>
          </div>
          <div className='column'>
            <div className="form__top">
              <h3 className="sub__title color__primary">Keep In Touch</h3>
              <p>I craft beautifully simple designs and code with love. It's a simple as that!</p>
            </div>
            <div className="form__middle">
              <div className="row">

              <input type="text" placeholder='First Name' name="user_name" className='control' required value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
              <input type="text" placeholder='Last Name' name='lastname' className='control' required value={secondName} onChange={(e)=>setSecondName(e.target.value)}/>
            </div>
            <div className="row">
              <input type="email" placeholder='E-Mail' name="user_email" className='control' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <input type="tel" placeholder='Phone Number' name='phone' className='control' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <textarea name="message" className='control' id="" cols={30} rows={11} placeholder='Type Your Message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <div className="form__bottom">
              <button  type="submit" className="btn btn__primary" value="send">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contacts