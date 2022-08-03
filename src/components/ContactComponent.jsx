import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'
import { BsToggleOn, BsToggleOff, BsFillTrashFill } from 'react-icons/bs'

const ContactComponent = ({ contact, remove, connected }) => {
  return (
    <tr className='fw-normal'>
      <td>{contact.name}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>
        {contact.connected ? (
          <>
            <BsToggleOn
              className='task-action'
              color='green'
              onClick={() => connected(contact)}
            />
          </>
        ) : (
          <BsToggleOff
            className='task-action'
            color='grey'
            onClick={() => connected(contact)}
          />
        )}
        <BsFillTrashFill
          color='tomato'
          className='task-action'
          onClick={remove}
        />
      </td>
    </tr>
  )
}

ContactComponent.propTypes = {
  Contact: PropTypes.instanceOf(Contact),
  remove: PropTypes.func.isRequired,
}

export default ContactComponent
