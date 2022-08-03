import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contact.class'

const ContactForm = ({ add }) => {
  const nameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)

  const addContact = (e) => {
    e.preventDefault()
    const newContact = new Contact(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      false
    )

    add(newContact)
  }

  return (
    <div className='card mb-2'>
      <div className='card-header p-3'>
        <h5>ADD CONTACT:</h5>
      </div>

      <form
        className='d-flex justify-content-center align-items-center mb-4 '
        onSubmit={addContact}
      >
        <div className='form-outline flex-fill'>
          <input
            type='text'
            ref={nameRef}
            id='inputName'
            className='form-control form-control-lg'
            required
            autofocus
            placeholder='Name Contact'
          />
          <input
            type='text'
            ref={lastNameRef}
            id='inputDescription'
            className='form-control form-control-lg'
            required
            autofocus
            placeholder='LastName'
          />
          <input
            type='email'
            ref={emailRef}
            id='inputEmail'
            className='form-control form-control-lg'
            required
            autofocus
            placeholder='Email'
          />
          <input
            type='submit'
            className='btn btn-success btn-lg mt-2'
            value='Agregar Contacto'
          />
        </div>
      </form>
    </div>
  )
}
ContactForm.protoTypes = {
  add: PropTypes.func.isRequired,
}

export default ContactForm
