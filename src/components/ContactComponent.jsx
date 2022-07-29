import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

const ContactComponent = ({ contact }) => {
  return (
    <div style={{ border: '1px solid white', marginBottom: '30px' }}>
      <h2>{contact.name}</h2>
      <h3>{contact.lastName}</h3>
      <h4>{contact.email}</h4>
      <h5>{contact.connected ? 'CONECTADO' : 'DESCONECTADO'}</h5>
    </div>
  )
}

ContactComponent.propTypes = {
  Contact: PropTypes.instanceOf(Contact),
}

export default ContactComponent
