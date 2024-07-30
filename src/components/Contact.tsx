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
        <div className='text-white grid border-2 p-12 items-center m-auto grid-cols-2' >
            <div className=''>
                <h1 className='font-bold  text-4xl'>{info.title.toUpperCase()}</h1>
                <p className=''>{info.content}</p>
                <Form />
            </div>
            <div className='place-self-end border-2 h-full'>
                {contactList}
            </div>
        </div>
    )
}

export default Contact