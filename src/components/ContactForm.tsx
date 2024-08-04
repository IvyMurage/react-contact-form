import React, { useEffect, useState } from 'react'
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


  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setContactInfo(prevContactInfo => ({
      ...prevContactInfo,
      [name]: value
    }))
  }

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(contacts))
  }, [contacts])


  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    setContacts(prevContacts => [contact, ...prevContacts])
    setContactInfo({
      name: '',
      email: '',
      message: ''
    })
  }




  return (
    <form onSubmit={handleSubmit} className='py-5 text-black text-sm mt-5' >
      <div className='flex flex-col justify-between'>
        <div className='grid grid-cols-2 gap-5'>
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
        </div>

        <textarea
          onChange={handleChange}
          rows={5}
          value={contact.message}
          placeholder='Message'
          name='message'
          className='h-auto mb-4 px-3 py-2'
        />
      </div>
      <Button type='submit' placeholder='SEND MESSAGE' />
    </form>
  )
}

export default Form