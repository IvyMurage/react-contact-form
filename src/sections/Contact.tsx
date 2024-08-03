import { useState } from 'react'
import content from '../content.json'
import Form from '../components/ContactForm'
import { nanoid } from 'nanoid'

function Contact() {
    const [info] = useState(content)
    const contactInfo = Object.entries(info.contact_info)
    const contactList = contactInfo.map(info => <div key={nanoid()} className='pb-3'>
        <h3 className='pb-2'>{info[0]}</h3>
        <p>{info[1]}</p>
    </div>)


    return (<>
        <div className='text-white sm:flex justify-between p-12 items-center m-auto grid-cols-2' >
            <div className=' sm:max-w-[60%] flex-grow'>
                <h1 className=' font-bold  text-4xl'>{info.title.toUpperCase()}</h1>
                <div className='w-14 mt-3 h-1 bg-blue-100'></div>
                <p className='mt-5 text-gray-200 '>{info.content}</p>
                <Form />
            </div>
            <div className=' space-y-7  h-full'>
                <h2 className='text-xl font-medium'>Contact Info</h2>
                {contactList}
            </div>
        </div>
    </>
    )
}

export default Contact