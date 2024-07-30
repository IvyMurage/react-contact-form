import { useState } from 'react'
import content from '../content.json'
import Form from './ContactForm'

function Contact() {
    const [info] = useState(content)
    const contactInfo = Object.entries(info.contact_info)
    const contactList = contactInfo.map(info => <div>
        <h3>{info[0]}</h3>
        <p>{info[1]}</p>
    </div>)
    return (
        <div className='text-white grid p-4 grid-cols-2 bg-gradient-to-r from-dark-blue to-linear'>
            <div>
                <h1 className='font-bold p-4 text-4xl'>{info.title.toUpperCase()}</h1>
                <p className='p-4'>{info.content}</p>
                <Form />
            </div>
            <div className=''>
                {contactList}
            </div>
        </div>
    )
}

export default Contact