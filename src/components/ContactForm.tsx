import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

type ContactType = {
  name: string
  email: string
  message: string
}
function Form() {
  const [contact, setContactInfo] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [contacts, setContacts] = useState<ContactType[]>([])
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setContactInfo(prevContactInfo => ({
      ...prevContactInfo,
      [name]: value
    }))
  }


  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    setContacts(prevContacts => [contact, ...prevContacts])


    setContactInfo({
      name: '',
      email: '',
      message: ''
    })
  }

  console.log(contacts)

  return (
    <form onSubmit={handleSubmit} >
      <div className='flex flex-col'>
        <Input
          value={contact.name}
          placeholder='Name'
          type='text'
          onChange={handleChange}
          name='name'
        />
        <Input
          value={contact.email}
          placeholder='Email'
          type='email'
          onChange={handleChange}
          name='email'
        />
        <Input
          value={contact.message}
          placeholder='Message'
          type='text'
          onChange={handleChange}
          name='message'
        />
      </div>
      <Button type='submit' placeholder='SEND MESSAGE' />
    </form>
  )
}

export default Form