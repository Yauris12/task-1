import React, { useState } from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../ContactComponent'
import ContactForm from './forms/ContactForm'

const ContactList = (props) => {
  const contact1 = new Contact(
    'Alexis',
    'Auris',
    'alexisaube28@gmail.com',
    true
  )

  const contact2 = new Contact('Yohhan', 'Auris', 'yaube288@gmail.com', false)
  const contact3 = new Contact('Martin', 'Auris', 'yaube288@gmail.com', false)

  const [contacts, setContacts] = useState([contact1, contact2, contact3])

  const deleteContact = (contact) => {
    const index = contacts.indexOf(contact)
    const tempContact = [...contacts]
    tempContact.splice(index, 1)
    setContacts(tempContact)
  }

  const editConnect = (contact) => {
    const index = contacts.indexOf(contact)
    const tempContact = [...contacts]

    tempContact[index].connected = !tempContact[index].connected

    setContacts(tempContact)
  }

  const addContact = (contact) => {
    const tempContact = [...contacts]
    tempContact.push(contact)
    setContacts(tempContact)
  }

  return (
    <>
      <ContactForm add={addContact} />
      <div className='col-12'>
        <div className='card'>
          <div className='card-body' data-mdb-perfect-scrollbar='true'>
            <table>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Apellido</th>
                  <th scope='col'>Correo</th>
                  <th scope='col'>Conectado</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, i) => {
                  return (
                    <ContactComponent
                      contact={contact}
                      key={i}
                      remove={deleteContact}
                      connected={editConnect}
                    />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactList
