import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../ContactComponent'

const ContactList = (props) => {
  const contact1 = new Contact(
    'Alexis',
    'Auris',
    'alexisaube28@gmail.com',
    true
  )

  const contact2 = new Contact('Yohhan', 'Auris', 'yaube288@gmail.com', false)

  return (
    <div>
      <ContactComponent contact={contact1} />
      <ContactComponent contact={contact2} />
    </div>
  )
}

export default ContactList
